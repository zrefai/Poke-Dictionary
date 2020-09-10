import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { commonStyles } from "../../styles/styleConfig";
import { styled } from "@shipt/react-native-tachyons";

const LoadingContainer = styled(View)`asc jcc flx-i`;
const LoadingIndicator = styled(ActivityIndicator)`jcc aic`;
const LoadingText = styled(Text, commonStyles.PokemonGB)``;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIndicator animating={true} color="blue" size="large" />
      <LoadingText>Loading Pokemon</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
