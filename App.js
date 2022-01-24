import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { globaStyles } from "./styles/globalStyles";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Navigation from "./navigation/stack";

export default function App() {
  // Fonts
  let [fontsLoaded, error] = useFonts({
    "inter-thin": require("./assets/fonts/Inter-Thin.ttf"),
    "inter-extralight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "inter-light": require("./assets/fonts/Inter-Light.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),

    "inter-semibold": require("./assets/fonts/Inter-SemiBold.ttf"),

    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),

    "inter-extrabold": require("./assets/fonts/Inter-ExtraBold.ttf"),

    "inter-black": require("./assets/fonts/Inter-Black.ttf"),
  });

  // Navigation

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigation />;
}
