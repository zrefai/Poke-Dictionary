import React from "react";
import { Image, View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { regularText } from "../../../styles/styleConfig";
import stringFormatter from "../../../utils/stringFormatter";
import capitalize from "../../../utils/capitalize";
import useSearch from "../../../hooks/useSearch";

const pokemonURL = "https://pokeapi.co/api/v2/pokemon/";
const EvolutionInfoImageContainer = styled(View)`aic jcc flx-row`;
const EvolutionLinkContainer = styled(View)`aic wp45 jcc`;
const EvolutionLinkImage = styled(Image)`wp70 ar-1`;
const EvolutionLinkText = styled(Text, regularText(9))``;
const EvolutionLinkInfoText = styled(Text, regularText(9))`lh-solid`;

const EvolutionLink = ({ link }) => {
  const [fetchPokemonResults, results, error] = useSearch(
    `${pokemonURL}${link.ID}`,
    `@POKEMON_${link.name.toUpperCase()}`
  );

  const renderInfo = (infoText) => {
    return (
      <EvolutionLinkContainer>
        <EvolutionLinkInfoText>{infoText}</EvolutionLinkInfoText>
      </EvolutionLinkContainer>
    );
  };

  const renderLinkInfo = () => {
    if (link.min_level) return renderInfo(`LVL ${link.min_level}`);
    if (link.item) return renderInfo(stringFormatter(link.item, "-"));
    if (link.happiness)
      return renderInfo(`Evolves when Happiness: ${link.happiness}`);
    if (link.trigger_name === "trade") {
      if (link.held_item) {
        return renderInfo(`Trade with ${stringFormatter(link.held_item, "-")}`);
      }
      return renderInfo("Trade");
    }
    if (link.held_item)
      return renderInfo(
        `Evolves holding ${stringFormatter(link.held_item, "-")}`
      );
    if (link.location)
      return renderInfo(`Evolve on ${stringFormatter(link.location, "-")}`);
    if (link.known_move)
      return renderInfo(
        `Evolves learning ${stringFormatter(link.known_move, "-")}`
      );

    return renderInfo(`LVL NULL`);
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
        <EvolutionInfoImageContainer>
          {renderLinkInfo()}
          {renderLinkImage(
            results.sprites.front_default,
            capitalize(link.name)
          )}
        </EvolutionInfoImageContainer>
      );
    }
    return null;
  };

  return renderLink();
};

export default EvolutionLink;
