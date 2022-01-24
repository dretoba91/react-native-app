import React from "react";
import { View, Text } from "react-native";
import Card from "../shared/Card";
import { globaStyles } from "../styles/globalStyles";
import { Dimensions } from "react-native";

const ReviewDetails = ({ navigation, route }) => {
  const { title, body, rating } = route.params;

  return (
    <View style={{ ...globaStyles.container }}>
      <Card>
        <View style={{ flexGrow: 0, alignItems: "flex-start", marginLeft: 3 }}>
          <Text style={globaStyles.details}>{title}</Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: 5,
              }}
            >
              <Text>{body}</Text>
            </View>
          </View>
          <Text style={globaStyles.details}>{rating} ⭐</Text>
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;
