import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./pokemonCardStyle";
import usePokemon from "../../hooks/usePokemon";
import PokemonType from "../pokemon-type/PokemonType";
import { commonStyles } from "../../styles/styleConfig";

const PokemonCardContainer = styled(View, styles.pokemonCardContainer)``;
const PokemonCardNothingText = styled(Text, commonStyles.PokemonGB)`jcc asc`;
const PokemonCardButton = styled(TouchableOpacity)`flx-i flx-row`;
const PokemonCardTextContainer = styled(
  View,
  styles.pokemonCardTextContainer
)`jcc`;
const PokemonCardText = styled(Text, styles.pokemonCardText)``;

const PokemonCard = ({ name, url }) => {
  const [getPokemon, results, error] = usePokemon(url);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const renderPokemonCard = () => {
    return (
      <PokemonCardButton>
        <Text style={{ flex: 2 }}>Image</Text>
        <PokemonCardTextContainer>
          <PokemonCardText style={styles.text}>
            {capitalize(name)}
          </PokemonCardText>
        </PokemonCardTextContainer>
        <PokemonType type={results.types} />
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

export default PokemonCard;
