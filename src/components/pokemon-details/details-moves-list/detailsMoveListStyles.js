import { StyleSheet } from "react-native";
import { normalizeFont, normalizeUIW } from "../../../styles/styleConfig";

const detailsMovesListColumnContainer = {
  flexDirection: "column",
  marginTop: 12,
  alignItems: "center",
};

const detailsMovesMoreButton = {
  borderRadius: 6,
  borderWidth: 2.5,
  borderColor: "#20232a",
  alignSelf: "center",
  marginTop: "2%",
  backgroundColor: "#6BACEF",
};

const detailsMovesMoreButtonText = {
  paddingTop: 7,
  paddingBottom: 3,
  paddingHorizontal: 6,
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(9),
  color: "white",
};

const detailsMoveListCell = {
  borderRadius: 5,
  borderWidth: 2,
  marginVertical: 2,
  minWidth: normalizeUIW(55),
  maxWidth: normalizeUIW(60),
};

const detailsMovesListCellText = {
  fontFamily: "Pokemon_GB",
  paddingTop: 5,
  paddingBottom: 1,
  marginVertical: 2,
  fontSize: normalizeFont(11),
  textAlign: "center",
};

export const styles = StyleSheet.create({
  detailsMovesListColumnContainer,
  detailsMoveListCell,
  detailsMovesListCellText,
  detailsMovesMoreButton,
  detailsMovesMoreButtonText,
});
