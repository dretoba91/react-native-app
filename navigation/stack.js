import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomBar from "./bottomBar";
import Note from "../screens/note";
import Jotter from "../screens/jotter";

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="BottomBar"
        component={BottomBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Note"
        component={Note}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Jotter"
        component={Jotter}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
