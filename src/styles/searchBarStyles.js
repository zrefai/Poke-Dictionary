import { StyleSheet } from "react-native";
import { normalizeUIH, noramlizeFont } from "./styleConfig";

const backgroundStyle = {
  marginVertical: 10,
  backgroundColor: "#F0EEEE",
  height: normalizeUIH(5),
  borderRadius: 5,
  marginHorizontal: 15,
  flexDirection: "row",
  marginBottom: 10,
};

const inputStyle = {
  flex: 1,
  fontSize: noramlizeFont(15),
};

const iconStyle = {
  fontSize: noramlizeFont(23),
  alignSelf: "center",
  marginHorizontal: 10,
};

export const styles = StyleSheet.create({
  backgroundStyle,
  inputStyle,
  iconStyle,
});
