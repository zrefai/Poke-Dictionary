import { StyleSheet } from "react-native";
import { normalizeFont } from "../../styles/styleConfig";

const loadMoreButton = {
  borderRadius: 6,
  borderWidth: 2.5,
  borderColor: "#20232a",
  alignSelf: "center",
  marginTop: "7%",
  marginBottom: "5%",
  backgroundColor: "#6BACEF",
};

const loadMoreText = {
  paddingTop: 7,
  paddingBottom: 3,
  paddingHorizontal: 6,
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(12),
  color: "white",
};

export const styles = StyleSheet.create({
  loadMoreButton,
  loadMoreText,
});
