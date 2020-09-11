import { StyleSheet } from "react-native";
import { normalizeFont } from "../../../../styles/styleConfig";

const linkNameText = {
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(9),
  paddingTop: 3,
  alignSelf: "center",
};

const infoText = {
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(9),
  paddingTop: 3,
  textAlign: "center",
};

export const styles = StyleSheet.create({
  linkNameText,
  infoText,
});
