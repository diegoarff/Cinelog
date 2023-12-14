import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { ActivityIndicator, SafeAreaView } from "react-native";
import colors from "tailwindcss/colors";

const AppLayout = () => {
  const { isLoading, token } = useAuth();

  if (isLoading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#101015",
        }}
      >
        <ActivityIndicator size="large" color={colors.teal[500]} />
      </SafeAreaView>
    );
  }

  if (!token) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="search" options={{ headerShown: false }} />
      <Stack.Screen
        name="movie/[id]/reviews"
        options={{
          headerStyle: { backgroundColor: "#101015" },
          headerTintColor: colors.zinc[200],
          headerTitle: "Reviews",
        }}
      />
      <Stack.Screen
        name="tv/[id]/reviews"
        options={{
          headerStyle: { backgroundColor: "#101015" },
          headerTintColor: colors.zinc[200],
          headerTitle: "Reviews",
        }}
      />
      <Stack.Screen
        name="reviews/[id]"
        options={{
          headerStyle: { backgroundColor: "#101015" },
          headerTintColor: colors.zinc[200],
          headerTitle: "Review",
        }}
      />
      <Stack.Screen
        name="comments/[id]"
        options={{
          headerStyle: { backgroundColor: "#101015" },
          headerTintColor: colors.zinc[200],
          headerTitle: "Comment",
        }}
      />
    </Stack>
  );
};

export default AppLayout;
