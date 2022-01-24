import React from "react";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  View,
} from "react-native";
// import { View } from "react-native-animatable";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

const { width, height } = Dimensions.get("window");

const Editor = () => {
  const richText = React.useRef();
  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <RichEditor
            ref={richText}
            placeholder={"Enter jotter text"}
            editorStyle={{ backgroundColor: "#F5F5F5" }}
            onChange={(descriptionText) => {
              console.log("descriptionText:", descriptionText);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginBottom: 10,
          width: "100%",
          height: 60,
        }}
      >
        <RichToolbar
          editor={richText}
          iconTint="#999999"
          selectedIconTint="#000000"
          iconSize={18}
          actions={[
            actions.setBold,
            actions.setItalic,
            //   actions.setUnderline,
            //   actions.heading1,
          ]}
          iconMap={{
            [actions.heading1]: ({ tintColor }) => (
              <Text style={[{ color: tintColor }]}>H1</Text>
            ),
          }}
        />
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#2AA893",
              borderRadius: 8,
              padding: 10,
              width: 100,
              height: 40,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontFamily: "inter-extrabold",
                fontSize: 13,
                lineHeight: 19,
              }}
            >
              Done
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Editor;
