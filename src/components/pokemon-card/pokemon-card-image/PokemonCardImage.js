import React from "react";
import { Image } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";

const PokemonImage = styled(Image, { width: "70%", marginHorizontal: 6 })`ar-1`;

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
