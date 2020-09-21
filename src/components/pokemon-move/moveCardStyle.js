import React from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { StyleSheet } from "react-native";
import { normalizeUIH, regularText } from "../../styles/styleConfig";

const detailsMoveCardContainer = {
  flex: 1,
  borderRadius: 6,
  borderWidth: 2.5,
  borderColor: "#20232a",
  marginHorizontal: 6,
  marginVertical: 4,
  padding: 6,
};

export const styles = StyleSheet.create({
  detailsMoveCardContainer,
});

export const MovesStatsContainer = ({ children, size }) => {
  const ViewStyle = styled(View, {
    flexDirection: "column",
    alignContent: "center",
    minHeight: normalizeUIH(size),
  })`flx-i jcc `;
  return <ViewStyle>{children}</ViewStyle>;
};

export const MoveStatsCell = ({ children, options }) => {
  const ViewStyle = styled(View, options)`flx-row`;
  return <ViewStyle>{children}</ViewStyle>;
};

export const MoveStatCellText = ({ children, size, options }) => {
  const TextStyle = styled(Text, regularText(size, 2, options))`flx-i mh1`;
  return <TextStyle>{children}</TextStyle>;
};
