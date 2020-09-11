import { StyleSheet } from "react-native";
import { normalizeFont } from "../../../../styles/styleConfig";

const linkNameText = {
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(9),
  paddingTop: 3,
  alignSelf: "center",
};

const lvlText = {
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(9),
  paddingTop: 3,
  alignSelf: "center",
};

export const styles = StyleSheet.create({
  linkNameText,
  lvlText,
});
