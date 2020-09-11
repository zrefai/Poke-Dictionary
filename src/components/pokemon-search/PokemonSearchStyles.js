import { StyleSheet } from "react-native";
import { normalizeFont } from "../../styles/styleConfig";

const nothingHereContainer = {
  alignContent: "center",
};

const nothingHereText = {
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(10),
  color: "#898989",
  textAlign: "center",
};

export const styles = StyleSheet.create({
  nothingHereContainer,
  nothingHereText,
});
