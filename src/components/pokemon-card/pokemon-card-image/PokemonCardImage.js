import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./pokemonCardImageStyles";
import { styled } from "@shipt/react-native-tachyons/dist/styled";

const PokemonImage = styled(Image, styles.pokemonImage)``;

const PokemonCardImage = ({ uri }) => {
  const renderImage = () => {
    if (uri) {
      return <PokemonImage source={{ uri: uri.front_default }} />;
    }
    return null;
  };
  return renderImage();
};

export default PokemonCardImage;
