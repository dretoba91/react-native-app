import React from "react";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createNativeStackNavigator();

enableScreens();

const HomeScreen = () => (
  <Stack.Navigator
    screenOptions={{
      animation: "slide_from_right",
      gestureEnabled: true,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
  </Stack.Navigator>
);

export default HomeScreen;

// export default () => (
//   <NavigationContainer>
//     <HomeScreen />
//   </NavigationContainer>
// );
