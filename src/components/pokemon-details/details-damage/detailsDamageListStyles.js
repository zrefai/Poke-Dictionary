import { StyleSheet } from "react-native";
import { normalizeFont } from "../../../styles/styleConfig";

const infoText = {
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(8),
  paddingTop: 3,
  textAlign: "center",
};

const nothingText = {
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(8),
  paddingTop: 3,
  textAlign: "center",
};

export const styles = StyleSheet.create({
  infoText,
  nothingText,
});
