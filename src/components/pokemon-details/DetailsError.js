import { styled } from "@shipt/react-native-tachyons";
import React from "react";
import { Text } from "react-native";
import { regularText } from "../../styles/styleConfig";

const DetailsError = ({ children }) => {
  const TextStyle = styled(
    Text,
    regularText(9, 9, { marginHorizontal: 10, lineHeight: 16 })
  )``;
  return <TextStyle>{children}</TextStyle>;
};

export default DetailsError;
