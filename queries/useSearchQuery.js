import { useInfiniteQuery } from "@tanstack/react-query";
import { getDiscover, getSearch } from "../api/functions";

export const useSearchQuery = (query) => {
  return useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: ({ pageParam = 1 }) => {
      if (query && query.length > 0) {
        return getSearch(query, pageParam);
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    getNextPageParam: (lastPage) => {
      if (lastPage?.page < lastPage?.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};

export const useDiscoverQuery = (type, sort, year, language, genre) => {
  return useInfiniteQuery({
    queryKey: ["discover", type, sort, year, language, genre],
    queryFn: ({ pageParam = 1 }) => {
      return getDiscover(type, sort, year, language, genre, pageParam);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    getNextPageParam: (lastPage) => {
      if (lastPage?.page < lastPage?.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
