import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Jotter = () => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            backgroundColor: "pink",
            width: width - 30,
            // height: height * 0.2,
          }}
        >
          <Text>Working</Text>
        </View>
        {/* <Modal>
          <Text>Working</Text>
        </Modal> */}
      </View>
    </View>
  );
};

export default Jotter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});
