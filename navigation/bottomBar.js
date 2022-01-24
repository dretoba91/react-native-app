import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./homeStack";
import AboutScreen from "./aboutStack";
import Icon from "react-native-vector-icons/FontAwesome5";
import More from "../screens/more";

const Tab = createBottomTabNavigator();

const BottomBar = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Home Tab") {
          iconName = focused ? "home" : "home";
          color = focused ? "#2AA893" : "gray";
          size = 20;
        } else if (route.name === "More Tab") {
          iconName = focused ? "swatchbook" : "swatchbook";
          color = focused ? "#2AA893" : "gray";
          size = 20;
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarLabelStyle: { fontFamily: "inter-semibold", fontSize: 11.5 },
      tabBarActiveTintColor: "#58ceb2",
      tabBarStyle: [
        {
          paddingVertical: 5,
          borderRadius: 50,
          width: "75%",
          alignSelf: "center",
          // borderTopLeftRadius: 50,
          // borderTopRightRadius: 50,
          backgroundColor: "white",
          // position: "absolute",
          height: 50,
          borderTopWidth: 0,
          elevatio: 0,
        },
      ],
      headerShown: false,
    })}
  >
    <Tab.Screen
      name="Home Tab"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="More Tab"
      component={More}
      //   options={{ headerShown: false }}
      //   options={}
    />
  </Tab.Navigator>
);

export default BottomBar;
