import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { globaStyles } from "../styles/globalStyles";
import { Formik } from "formik";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globaStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
          console.log(values);
        }}
      >
        {({ handleChange, values, handleSubmit }) => (
          <View>
            <TextInput
              multiline
              style={globaStyles.input}
              placeholder="title"
              onChangeText={handleChange("title")}
              value={values.title}
            />

            <TextInput
              multiline
              style={globaStyles.input}
              placeholder="body"
              onChangeText={handleChange("body")}
              value={values.body}
            />
            <TextInput
              multiline
              style={globaStyles.input}
              placeholder="Rating (1-10)"
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="numeric"
            />

            <Button title="submit" color="#2AA893" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
