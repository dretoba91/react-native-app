import { StyleSheet } from "react-native";

export const globaStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    color: "#3e3d3d",
  },

  titleText: {
    fontFamily: "inter-semibold",
    fontSize: 13,
  },

  list: {
    fontFamily: "inter-semibold",
    fontSize: 13,
    padding: 15,
  },

  display: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  card: {
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333333",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginHorizontal: 4,
    marginVertical: 6,
    flexWrap: "wrap",
  },
  cardContent: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 5,
    // flexShrink: 1,
  },

  modalContent: {
    // flex: 1,
    // justifyContent: "flex-end",
    // // alignItems: "center",
    // marginBottom: 22,
    // marginTop: 200,
  },

  input: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#ddd",
    padding: 10,
    fontFamily: "inter-medium",
    marginVertical: 5,
  },

  note: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    marginVertical: 13,
    width: "100%",
    height: 1009,

    // marginHorizontal: 14,
  },

  moreContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    // flexWrap: "wrap",
    marginHorizontal: 10,
  },

  details: {
    fontFamily: "inter-semibold",
    fontSize: 13,
    marginVertical: 5,
  },
});
