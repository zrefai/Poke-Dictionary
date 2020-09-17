import React from "react";
import { Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { regularText, lowerCaseFormat } from "../styles/styleConfig";
import { useSelector } from "react-redux";
import { unown } from "../redux/selectors";

const StyledText = ({ children, size, padtop, options, number = false }) => {
  const isUnown = useSelector(unown);
  const TextStyle = styled(
    Text,
    regularText(size, padtop, options, number ? false : isUnown)
  )``;

  return <TextStyle>{lowerCaseFormat(children, isUnown)}</TextStyle>;
};

export default StyledText;
