import React from "react";
import { View, Text } from "react-native";
import { globaStyles } from "../styles/globalStyles";

const Card = (props) => {
  return (
    <View style={globaStyles.card}>
      <View style={globaStyles.cardContent}>
        <Text>{props.children}</Text>
      </View>
    </View>
  );
};

export default Card;
