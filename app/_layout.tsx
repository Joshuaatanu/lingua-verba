import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    unbounded: require("@/assets/fonts/Unbounded-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#31AA45" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: "#000",
      }}
    />
  );
}
