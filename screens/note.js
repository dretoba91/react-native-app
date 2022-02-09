import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Modal,
  Button,
  Pressable,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

import Card from "../shared/Card";
import { globaStyles } from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Shape from "../assets/icons/Shape.svg";
import Shape2 from "../assets/icons/Shape2.svg";
import Shape3 from "../assets/icons/Shape3.svg";
import Btc from "../assets/icons/Btc.svg";
import Image1 from "../assets/icons/Image1.svg";
import { SimpleLineIcons } from "@expo/vector-icons";
import Editor from "./editor";
import { SelectableText } from "@astrocoders/react-native-selectable-text";

const { width, height } = Dimensions.get("window");

const Note = ({ navigation }) => {
  const richText = React.useRef();

  const [modal, setModal] = useState(false);
  const [jotterModal, setJotterModal] = useState(false);

  return (
    <SafeAreaView style={globaStyles.container}>
      <View style={styles.container}>
        <View style={styles.view1}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 100, paddingLeft: 30 }}
            onPress={() => setJotterModal(true)}
          >
            <SimpleLineIcons name="note" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareNote}>
            <Shape />
            <Text
              style={{
                fontFamily: "inter-extrabold",
                fontSize: 13,
                color: "#FFFFFF",
                marginLeft: 4,
                lineHeight: 18,
              }}
            >
              Share Note 🤗
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={globaStyles.note}>
          <View style={styles.view2Content}>
            <View
              style={{
                width: "92%",
                height: 87,
                padding: 10,
                flexDirection: "row",
                alignItems: "flex-start",
                flexGrow: 0,
                marginHorizontal: 0,
                marginVertical: 3,
              }}
            >
              <View
                style={{
                  backgroundColor: "#F05454",
                  borderRadius: 12,
                  width: "10.4%",
                  height: 39,
                  // flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Btc style={{ width: 20, height: 20 }} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginLeft: 8,
                  marginRight: 12,
                  // paddingRight: 3,
                  width: 276,
                  height: 67,
                  // flexShrink: 1,
                }}
              >
                <View
                  style={{
                    alignItems: "flex-start",
                    width: 249,
                    height: 67,
                    // borderColor: "red",
                    // borderWidth: 3,
                  }}
                >
                  <Text>
                    <Text
                      style={{
                        color: "#2AA893",
                        fontFamily: "inter-medium",
                        fontSize: 13,
                        alignItems: "center",
                      }}
                    >
                      Note{" "}
                      <Entypo
                        name="dot-single"
                        size={15}
                        color="black"
                        style={{ alignSelf: "center" }}
                      />
                    </Text>
                    <Text
                      style={{
                        fontFamily: "inter-medium",
                        fontSize: 13,
                        lineHeight: 19.5,
                        // lineHeight: "150%",
                      }}
                    >
                      Introduction to the Startup Eco-tec system
                    </Text>
                  </Text>

                  <Text
                    style={{
                      fontFamily: "inter-regular",
                      fontSize: 11.5,
                      color: "#B5B5B5",
                      marginTop: 10,
                      lineHeight: 17.25,
                      // marginBottom: 18,
                    }}
                  >
                    ⏱🔥 230k study streak{" "}
                  </Text>
                </View>
                <Shape2 style={{ width: 18, height: 18, marginLeft: 6 }} />
              </View>
            </View>
          </View>
          <View style={styles.view3Content}>
            <Text
              style={{
                fontFamily: "inter-regular",
                fontSize: 13,
                lineHeight: 19.5,

                // lineHeight: "150%",
              }}
              selectable={true}
              selectionColor="#2AA893"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
              <Text style={{ fontFamily: "inter-bold" }}>
                Exercitation veniam consequat
              </Text>{" "}
              sunt nostrud amet.
            </Text>
          </View>
          <View style={styles.view4Content}>
            <Text
              style={{
                fontFamily: "inter-regular",
                fontSize: 13,
                lineHeight: 19.5,
                // lineHeight: "150%",
              }}
            >
              <Text
                style={{
                  fontFamily: "inter-bold",
                  fontSize: 13,
                  lineHeight: 19.5,
                }}
              >
                Amet minim mollit
              </Text>{" "}
              non deserunt ullamco est sit aliqua dolor do amet sint.
              <Text
                style={{ fontStyle: "italic", fontSize: 13, lineHeight: 19.5 }}
              >
                Velit officia consequat
              </Text>{" "}
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Text>
          </View>
          <View style={styles.view5Content}>
            <Image1 />
          </View>
          <View style={styles.view6Content}>
            <Text
              style={{
                fontFamily: "inter-regular",
                fontSize: 13,
                lineHeight: 19.5,
                // lineHeight: "150%",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </View>
          <View style={styles.view6Content}>
            {/* <Text
              style={{
                fontFamily: "inter-regular",
                fontSize: 13,
                lineHeight: 19.5,
                // lineHeight: "150%",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.Velit officia consequat consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.
            </Text> */}
            <SelectableText
              menuItems={["highlighting text", "add marking"]}
              onSelection={({
                eventType,
                content,
                selectionStart,
                selectionEnd,
              }) => {}}
              value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.Velit officia consequat consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </View>
          <View style={styles.view7Content}>
            <TouchableOpacity onPress={() => setModal(true)}>
              <Text
                style={{
                  fontFamily: "inter-bold",
                  fontSize: 13,
                  textDecorationLine: "underline",
                  lineHeight: 19.5,
                }}
              >
                Footnotes
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view8Content}>
            <Shape3 />
            <Text
              style={{
                fontFamily: "inter-extrabold",
                fontSize: 13,
                color: "#FFFFFF",
                marginLeft: 9.6,
                lineHeight: 19.5,
              }}
            >
              Attempt Questions
            </Text>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            left: 15,
            bottom: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#2AA893",
            width: 100,
            height: 40,
            // color="#2AA893"
          }}
        >
          <Text
            style={{
              fontFamily: "inter-extrabold",
              fontSize: 12,
              color: "#2AA893",
              textAlign: "center",
              paddingHorizontal: 20,
              lineHeight: 18,
            }}
          >
            Last note
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            right: 15,
            bottom: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#2AA893",
            width: 100,
            height: 40,
          }}
        >
          <Text
            style={{
              fontFamily: "inter-extrabold",
              fontSize: 12,
              color: "#2AA893",
              textAlign: "center",
              paddingHorizontal: 20,
              lineHeight: 18,
            }}
          >
            Next note
          </Text>
        </TouchableOpacity>

        <Modal visible={modal} animationType="slide" transparent={true}>
          <View
            style={{
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              borderWidth: 2,
              borderColor: "#FFFFFF",
              width: "100%",
              height: 500,
              alignSelf: "center",
              Top: 81,
              marginHorizontal: 17,
              paddingHorizontal: 10,
              position: "absolute",
              bottom: 0,
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,

              // backgroundColor: "blue",
            }}
          >
            <Ionicons
              name="close-circle"
              size={24}
              color="#B5B5B5"
              onPress={() => setModal(false)}
              style={{ alignSelf: "flex-end", marginTop: 5 }}
            />

            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: 34,
                marginHorizontal: 1,
                padding: 1,
              }}
            >
              <Text
                style={{
                  fontFamily: "inter-extrabold",
                  fontSize: 14,
                  color: "#252525",
                  lineHeight: 21,
                }}
              >
                Footnotes
              </Text>
              <View style={{ marginTop: 10 }}>
                <View style={styles.row}>
                  <View style={styles.bullet}>
                    <Text>1.</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.foot}>Footnote text for number 1</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.bullet}>
                    <Text>2.</Text>
                  </View>
                  <View
                    style={{
                      ...styles.bulletText,
                      marginHorizontal: 1,

                      // alignItems: "center",
                    }}
                  >
                    <Text style={{ ...styles.foot }}>
                      Mayowa Adegoke, “Book title” published in 1994 Lg{" "}
                      <Text
                        style={{
                          ...styles.foot,
                          color: "#2AA893",
                          // alignSelf: "flex-start",
                        }}
                      >
                        linkurl.com
                      </Text>
                    </Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.bullet}>
                    <Text>3.</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text
                      style={{
                        ...styles.foot,
                        color: "#2AA893",
                      }}
                    >
                      anotherlinkurl.com
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/* Modal 2 */}
        {/* <View style={{ alignSelf: "center" }}> */}
        <Modal visible={jotterModal} transparent={true}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 60,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFFFFF",
                width: width - 20,
                borderRadius: 12,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "inter-extrabold",
                    fontSize: 14,
                    lineHeight: 17,
                  }}
                >
                  Jotter
                </Text>
                <Ionicons
                  name="close-outline"
                  size={24}
                  color="#B5B5B5"
                  onPress={() => setJotterModal(false)}
                  // style={{ marginRight: 10 }}
                />
              </View>
              <ScrollView>
                <View style={{ paddingVertical: 10 }}>
                  <ScrollView>
                    <KeyboardAvoidingView
                      behavior={Platform.OS === "ios" ? "padding" : "height"}
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                      {/* <View > */}
                      <RichEditor
                        ref={richText}
                        placeholder={"Enter jotter text"}
                        editorStyle={{ backgroundColor: "#F5F5F5" }}
                        onChange={(descriptionText) => {
                          console.log("descriptionText:", descriptionText);
                        }}
                      />
                      {/* </View> */}
                    </KeyboardAvoidingView>
                  </ScrollView>
                </View>
              </ScrollView>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  marginBottom: 10,
                  width: "100%",
                  height: 60,
                }}
              >
                <RichToolbar
                  style={{ backgroundColor: "#fff" }}
                  editor={richText}
                  iconSize={22}
                  iconTint="#000"
                  disabled={false}
                  selectedIconTint="#000"
                  unselectedButtonStyle={{
                    backgroundColor: "#f5f5f5",
                    marginRight: 10,
                    borderRadius: 4.4,
                    padding: 0.25,
                  }}
                  selectedButtonStyle={{
                    backgroundColor: "#f5f5f5",
                    marginRight: 10,
                    borderRadius: 4.4,
                  }}
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
            </View>
          </View>
        </Modal>
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: 1009,
    // position: "relative",
    marginVertical: 10,
  },
  view2Content: {
    width: "92%",
    height: 103,
    borderRadius: 12,
    borderColor: "#FBFBFB",
    borderWidth: 1,
    borderStyle: "solid",
    marginHorizontal: 14.5,
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
  },
  view1: {
    borderRadius: 3,
    // borderColor: "red",
    // borderWidth: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 63,
    marginTop: 13,
    marginBottom: 5,
  },

  view3Content: {
    width: "92%",
    height: 75,
    color: "#252525",
    // borderColor: "red",
    // borderWidth: 3,
    marginTop: 10,
    marginLeft: 16,
    marginRight: 14,
  },
  view4Content: {
    width: "92%",
    height: 83,
    color: "#252525",
    // borderColor: "red",
    // borderWidth: 3,
    marginTop: 10,
    marginLeft: 16,
    marginRight: 14,
  },

  view5Content: {
    width: "92%",
    height: 200,

    // borderColor: "red",
    // borderWidth: 3,
    marginTop: 10,
    marginLeft: 16,
    marginRight: 18,
  },

  view6Content: {
    width: "92%",
    height: 83,
    color: "#252525",
    // borderColor: "red",
    // borderWidth: 3,
    marginTop: 10,
    marginLeft: 17,
    marginRight: 13,
  },

  view7Content: {
    width: "92%",
    height: 21,
    color: "#252525",
    // borderColor: "red",
    // borderWidth: 3,
    marginTop: 10,
    marginLeft: 17,
    marginRight: 13,
  },

  view8Content: {
    width: "92%",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#664EFF",
    borderRadius: 8,
    // borderColor: "red",
    // borderWidth: 3,
    marginTop: 10,
    marginLeft: 17,
    marginRight: 13,
    marginBottom: 63,
  },

  backButton: {
    marginLeft: 24,
  },
  shareNote: {
    // flex: 0.25,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "flex-start",
    backgroundColor: "#2AA893",
    width: 120,
    height: 40,

    borderRadius: 8,
    marginRight: 14,
    padding: 7,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    // flexWrap: "wrap",
  },
  bullet: {
    flexDirection: "row",
    width: 15,
    // alignSelf: "center",
    alignItems: "flex-start",
  },
  bulletText: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    // flex: 4,
  },

  foot: {
    fontFamily: "inter-regular",
    fontSize: 13,
    lineHeight: 26,
    // alignItems: "flex-start",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // paddingRight: 5,
  },
});
