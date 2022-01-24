import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Card from "../shared/Card";
import { globaStyles } from "../styles/globalStyles";
import Note from "./note";

const More = ({ navigation }) => {
  return (
    <View style={globaStyles.container}>
      <View style={globaStyles.moreContent}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Note")}
          style={{ marginVertical: 40 }}
        >
          <View
            style={{
              backgroundColor: "#2AA893",
              alignItems: "center",
              justifyContent: "center",
              width: 150,
              height: 75,
              borderWidth: 2,
              borderRadius: 12,
              borderColor: "#FFFFFF",
            }}
          >
            <Text
              style={{
                fontFamily: "inter-black",
                fontSize: 25,
                color: "#FFFFFF",
              }}
            >
              Note 📝
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Jotter")}
          style={{ marginVertical: 40, marginHorizontal: 20 }}
        >
          <View
            style={{
              backgroundColor: "#2AA893",
              alignItems: "center",
              justifyContent: "center",
              width: 150,
              height: 75,
              borderWidth: 2,
              borderRadius: 12,
              borderColor: "#FFFFFF",
            }}
          >
            <Text
              style={{
                fontFamily: "inter-black",
                fontSize: 25,
                color: "#FFFFFF",
              }}
            >
              Jotter 📰
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default More;
