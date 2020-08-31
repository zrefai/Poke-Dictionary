import { StyleSheet } from "react-native";
import { normalizeFont, normalizeUIW } from "../../styles/styleConfig";

const typeContainer = {
  flex: 1,
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
};

const typeBackground = {
  borderRadius: 5,
  borderWidth: 2,
  minWidth: normalizeUIW(20),
  margin: 1,
};

const typeText = {
  alignSelf: "center",
  fontFamily: "Pokemon_GB",
  color: "white",
  paddingHorizontal: 5,
  paddingTop: 4,
  fontSize: normalizeFont(8.5),
};

export const styles = StyleSheet.create({
  typeContainer,
  typeBackground,
  typeText,
});
