import React from "react";
import { Image, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./evolutionLinkStyles";
import capitalize from "../../../../utils/capitalize";
import useSearch from "../../../../hooks/useSearch";
import { normalizeUIW } from "../../../../styles/styleConfig";

const pokemonURL = "https://pokeapi.co/api/v2/pokemon/";
const EvolutionImageArrowContainer = styled(View)`aic jcc flx-row`;
const EvolutionLinkContainer = styled(View)`aic wp45 jcc`;
const EvolutionLinkImage = styled(Image)`wp70 ar-1`;
const EvolutionLinkText = styled(Text, styles.linkNameText)``;
const EvolutionLinkLvlText = styled(Text, styles.lvlText)``;

const EvolutionLink = ({ link }) => {
  const [fetchPokemonResults, results, error] = useSearch(
    `${pokemonURL}${link.ID}`,
    `@POKEMON_${link.name.toUpperCase()}`
  );

  const renderLinkArrow = (lvl) => {
    return (
      <EvolutionLinkContainer>
        <EvolutionLinkLvlText>{`LVL ${lvl}`}</EvolutionLinkLvlText>
      </EvolutionLinkContainer>
    );
  };

  const renderLinkImage = (uri, name) => {
    return (
      <EvolutionLinkContainer>
        <EvolutionLinkImage source={{ uri: uri }} />
        <EvolutionLinkText>{name}</EvolutionLinkText>
      </EvolutionLinkContainer>
    );
  };

  const renderLink = () => {
    if (results.sprites !== undefined) {
      return (
        <EvolutionImageArrowContainer>
          {renderLinkArrow(link.min_level)}
          {renderLinkImage(
            results.sprites.front_default,
            capitalize(link.name)
          )}
        </EvolutionImageArrowContainer>
      );
    }
    return null;
  };

  return renderLink();
};

export default EvolutionLink;
