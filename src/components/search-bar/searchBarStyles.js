import { StyleSheet } from "react-native";
import { normalizeFont } from "../../styles/styleConfig";

const backgroundStyle = {
  marginVertical: 10,
  backgroundColor: "#f0eeee",
  borderRadius: 5,
  marginHorizontal: 15,
  flexDirection: "row",
  marginBottom: 6,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.41,
  shadowRadius: 6,

  elevation: 6,
};

const inputStyle = {
  flex: 1,
  fontSize: normalizeFont(13),
  paddingTop: 5,
  fontFamily: "Pokemon_GB",
};

const iconStyle = {
  fontSize: normalizeFont(23),
  alignSelf: "center",
  marginHorizontal: 10,
  marginVertical: 2,
};

export const styles = StyleSheet.create({
  backgroundStyle,
  inputStyle,
  iconStyle,
});
