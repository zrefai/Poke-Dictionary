import { StyleSheet } from "react-native";
import { normalizeUIW } from "../../../styles/styleConfig";

const detailsMovesMoreButton = {
  borderRadius: 6,
  borderWidth: 2.5,
  borderColor: "#20232a",
  alignSelf: "center",
  marginTop: "2%",
  backgroundColor: "#6BACEF",
};

const detailsMoveListCell = {
  borderRadius: 5,
  borderWidth: 2,
  marginVertical: 2,
  minWidth: normalizeUIW(55),
  maxWidth: normalizeUIW(60),
};

export const styles = StyleSheet.create({
  detailsMoveListCell,
  detailsMovesMoreButton,
});
