import React from "react";
import { View, Image } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { normalizeUIH, normalizeUIW } from "../../../styles/styleConfig";
import placeholder from "../../../../assets/images/Placeholder.png";

const PokemonImage = styled(Image, {
  marginHorizontal: 6,
})`ar-1 jcc wp70`;
const PokemonIcon = styled(Image, {
  marginHorizontal: 6,
  aspectRatio: normalizeUIH(1 / 8),
  marginTop: normalizeUIH(-1.4),
  marginBottom: normalizeUIH(1.3),
})`wp70 rm-contain`;
const PlaceholderImage = styled(Image, {
  width: null,
  height: null,
  marginRight: normalizeUIW(6),
})`flx-i rm-contain`;
const PokemonImageContainer = styled(View, {
  flex: 2,
})`jcc`;

const PokemonCardImage = ({ sprites }) => {
  const renderImage = () => {
    if (sprites) {
      if (sprites.front_default)
        return (
          <PokemonImageContainer>
            <PokemonImage source={{ uri: sprites.front_default }} />
          </PokemonImageContainer>
        );
      if (sprites.versions["generation-viii"].icons.front_default)
        return (
          <PokemonImageContainer>
            <PokemonIcon
              source={{
                uri: sprites.versions["generation-viii"].icons.front_default,
              }}
            />
          </PokemonImageContainer>
        );
    }
    return (
      <PokemonImageContainer>
        <PlaceholderImage source={placeholder} />
      </PokemonImageContainer>
    );
  };
  return renderImage();
};

export default PokemonCardImage;
