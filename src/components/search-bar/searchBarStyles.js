import { StyleSheet } from "react-native";
import { normalizeUIH, noramlizeFont } from "../../styles/styleConfig";

const backgroundStyle = {
  marginVertical: 10,
  backgroundColor: "#F0EEEE",
  borderRadius: 5,
  marginHorizontal: 15,
  flexDirection: "row",
  marginBottom: 10,
};

const inputStyle = {
  flex: 1,
  fontSize: noramlizeFont(13),
  paddingTop: 5,
  fontFamily: "Pokemon_GB",
};

const iconStyle = {
  fontSize: noramlizeFont(23),
  alignSelf: "center",
  marginHorizontal: 10,
  marginVertical: 2,
};

export const styles = StyleSheet.create({
  backgroundStyle,
  inputStyle,
  iconStyle,
});
