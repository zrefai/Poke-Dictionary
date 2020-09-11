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
const EvolutionLinkInfoText = styled(Text, styles.infoText)`lh-solid`;

const EvolutionLink = ({ link }) => {
  const [fetchPokemonResults, results, error] = useSearch(
    `${pokemonURL}${link.ID}`,
    `@POKEMON_${link.name.toUpperCase()}`
  );

  const stringFormatter = (text) => {
    const item_arr = text.split("-").map((item) => {
      return capitalize(item);
    });

    return item_arr.join(" ");
  };

  const renderInfo = (infoText) => {
    return (
      <EvolutionLinkContainer>
        <EvolutionLinkInfoText>{infoText}</EvolutionLinkInfoText>
      </EvolutionLinkContainer>
    );
  };

  const renderLinkInfo = () => {
    if (link.min_level) return renderInfo(`LVL ${link.min_level}`);
    if (link.item) return renderInfo(stringFormatter(link.item));
    if (link.happiness)
      return renderInfo(`Evolves when Happiness: ${link.happiness}`);
    if (link.trigger_name === "trade") {
      if (link.held_item) {
        return renderInfo(`Trade with ${stringFormatter(link.held_item)}`);
      }
      return renderInfo("Trade");
    }
    if (link.held_item)
      return renderInfo(`Evolves holding ${stringFormatter(link.held_item)}`);
    if (link.location)
      return renderInfo(`Evolve on ${stringFormatter(link.location)}`);
    if (link.known_move)
      return renderInfo(`Evolves learning ${stringFormatter(link.known_move)}`);

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
        <EvolutionImageArrowContainer>
          {renderLinkInfo()}
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
