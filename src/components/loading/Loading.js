import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { regularText } from "../../styles/styleConfig";
import { styled } from "@shipt/react-native-tachyons";
import { useSelector } from "react-redux";
import { unown } from "../../redux/selectors";

const LoadingContainer = styled(View)`asc jcc flx-i`;
const LoadingIndicator = styled(ActivityIndicator)`jcc aic`;

const Loading = () => {
  const isUnown = useSelector(unown);
  const LoadingText = styled(Text, regularText(10, 5, {}, isUnown))``;
  return (
    <LoadingContainer>
      <LoadingIndicator animating={true} color="blue" size="large" />
      <LoadingText>Loading Pokemon</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
