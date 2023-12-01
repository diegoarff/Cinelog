import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import DetailsScreen from "../../../../screens/DetailsScreen";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  return <DetailsScreen type="movies" id={id} />;
};

export default MovieDetails;

const styles = StyleSheet.create({});
