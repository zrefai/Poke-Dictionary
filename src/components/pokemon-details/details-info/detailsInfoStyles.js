import React from "react";
import { StyleSheet } from "react-native";
import { normalizeFont } from "../../../styles/styleConfig";

const detailsInfoColumnContainer = {
  flexDirection: "column",
  marginTop: 12,
};

const detailsheaderText = {
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(15),
  paddingTop: 5,
};

const detailsInfoCell = {
  borderRadius: 5,
  borderWidth: 2,
  marginHorizontal: 2,
};

const detailsInfoCellText = {
  fontFamily: "Pokemon_GB",
  paddingTop: 5,
  paddingBottom: 1,
  fontSize: normalizeFont(11),
  paddingHorizontal: 5,
};

export const styles = StyleSheet.create({
  detailsInfoColumnContainer,
  detailsheaderText,
  detailsInfoCell,
  detailsInfoCellText,
});
