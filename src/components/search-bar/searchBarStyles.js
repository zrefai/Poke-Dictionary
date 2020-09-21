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
  shadowOpacity: 0.18,
  shadowRadius: 2.0,
  elevation: 1,
};

const iconStyle = {
  fontSize: normalizeFont(23),
  marginHorizontal: 7,
  paddingTop: 3,
  marginVertical: 2,
};

export const styles = StyleSheet.create({
  backgroundStyle,
  iconStyle,
});
