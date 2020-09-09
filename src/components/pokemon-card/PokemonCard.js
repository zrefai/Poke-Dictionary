import React, { memo } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./pokemonCardStyle";
import { commonStyles } from "../../styles/styleConfig";
import usePokemon from "../../hooks/usePokemon";
import PokemonType from "../pokemon-type/PokemonType";
import PokemonCardImage from "./pokemon-card-image/PokemonCardImage";

const PokemonCardContainer = styled(View, styles.pokemonCardContainer)``;
const PokemonCardNothingText = styled(Text, commonStyles.PokemonGB)`jcc asc`;
const PokemonCardButton = styled(TouchableOpacity)`flx-i flx-row`;
const PokemonCardTextContainer = styled(
  View,
  styles.pokemonCardTextContainer
)`jcc`;
const PokemonCardText = styled(Text, styles.pokemonCardText)``;
const PokemonCardImageContainer = styled(
  View,
  styles.pokemonCardImageContainer
)``;
const PokemonCardTypeContainer = styled(
  View,
  styles.pokemonCardTypeContainer
)``;

const PokemonCard = ({ name, url }) => {
  const [getPokemon, results, error] = usePokemon(name, url);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const renderPokemonCard = () => {
    return (
      <PokemonCardButton>
        <PokemonCardImageContainer>
          <PokemonCardImage uri={results.sprites} />
        </PokemonCardImageContainer>
        <PokemonCardTextContainer>
          <PokemonCardText>{capitalize(name)}</PokemonCardText>
        </PokemonCardTextContainer>
        <PokemonCardTypeContainer>
          <PokemonType type={results.types} />
        </PokemonCardTypeContainer>
      </PokemonCardButton>
    );
  };

  return (
    <PokemonCardContainer>
      {results ? (
        renderPokemonCard()
      ) : (
        <PokemonCardNothingText>Nothing Yet</PokemonCardNothingText>
      )}
    </PokemonCardContainer>
  );
};

export default memo(PokemonCard);
