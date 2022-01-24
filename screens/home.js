import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Keyboard,
} from "react-native";
import { globaStyles } from "../styles/globalStyles";
import Card from "../shared/Card";
import Icon from "react-native-vector-icons/FontAwesome5";
import ReviewForm from "./reviewForm";

const Home = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Deyi, Backend Developer",
      description: "Reliable backend engineer",
      rating: 8,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
      key: 1,
    },
    {
      title: "Raheela, Frontend Developer",
      description: "Efficient frontend engineer",
      rating: 7,
      body: "Efficient frontend engineer",
      key: 2,
    },
    {
      title: "Yemi, Fullstack Developer",
      description: "Productive fullstack engineer",
      rating: 9,
      body: "Productive fullstack engineer",
      key: 3,
    },

    {
      title: "Habeeb, Mobile App Developer",
      description: "Productive fullstack engineer",
      rating: 6,
      body: "Result driven Mobible Engineer",
      key: 4,
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModal(false);
  };

  return (
    <View style={globaStyles.container}>
      <View style={{ flex: 1, height: 600 }}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <Card>
                <View>
                  <Text style={globaStyles.titleText}>{item.title}</Text>
                  <Text style={globaStyles.titleText}>{item.description}</Text>
                </View>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* <AddReview submitHandler={submitHandler} /> */}

      <Modal visible={modal} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#f2efef",
                width: "100%",
                height: 300,
                // paddingVertical: 10,
                // paddingBottom: 20,
              }}
            >
              <Icon
                name="window-close"
                size={18}
                color="#2AA893"
                onPress={() => setModal(false)}
                style={styles.modalToggleClose}
              />
              <ReviewForm addReview={addReview} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Icon
        name="plus"
        size={15}
        color="#2AA893"
        onPress={() => setModal(true)}
        style={styles.modalToggle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#2AA893",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },

  modalToggleClose: {
    marginTop: 20,
    marginRight: 30,
    // borderWidth: 1,
    borderColor: "#2AA893",
    // padding: 10,
    // borderRadius: 10,
    alignSelf: "flex-end",
  },
});

export default Home;
