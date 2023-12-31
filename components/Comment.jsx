import { View, Image, Pressable } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { useRouter } from "expo-router";

const Comment = ({ item, detail }) => {
  const router = useRouter();

  return (
    <View className={`gap-6 ${detail ? "" : "rounded-xl"} bg-baseDark p-4`}>
      <View className="flex-row items-center justify-between">
        <Pressable
          onPress={() => router.push(`/(app)/user/${item.userId._id}`)}
        >
          <View className="flex-row items-center gap-3">
            <Image
              source={{ uri: item.userId.avatar }}
              className="aspect-square w-10 rounded-full"
            />
            <CustomText variant="h5" className="text-light" numberOfLines={1}>
              {item.userId.username}
            </CustomText>
            {item.userId.critic && (
              <CustomText
                variant="chip"
                className="rounded-full bg-accentDark px-2 py-1 text-light"
              >
                CRITIC
              </CustomText>
            )}
          </View>
        </Pressable>
        <View>
          <CustomText variant="body2" className="text-baseLight">
            {new Date(item.updatedAt).toLocaleDateString(undefined, {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </CustomText>
        </View>
      </View>
      <View>
        {item.content && (
          <CustomText className="text-baseLight">{item.content}</CustomText>
        )}
      </View>
    </View>
  );
};

export default Comment;
