import React, { memo } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./pokemonCardStyle";
import { commonStyles } from "../../styles/styleConfig";
import { useNavigation } from "@react-navigation/native";
import capitalize from "../../utils/capitalize";
import PokemonType from "../pokemon-type/PokemonType";
import PokemonCardImage from "./pokemon-card-image/PokemonCardImage";
import useSearch from "../../hooks/useSearch";

const PokemonCardContainer = styled(View, styles.pokemonCardContainer)``;
const PokemonCardNothingText = styled(Text, commonStyles.PokemonGB)`jcc asc`;
const PokemonCardButton = styled(TouchableOpacity)`flx-i flx-row`;
const PokemonCardText = styled(Text, styles.pokemonCardText)``;
const PokemonCardTextContainer = styled(
  View,
  styles.pokemonCardTextContainer
)`jcc`;
const PokemonCardImageContainer = styled(View, { flex: 2 })``;
const PokemonCardTypeContainer = styled(View, {
  alignContent: "center",
  marginRight: 3,
})`jcc `;

const PokemonCard = ({ name, url }) => {
  const navigation = useNavigation();
  const [fetchPokemonResults, results, error] = useSearch(
    url,
    `@POKEMON_${name.toUpperCase()}`,
    name
  );

  const renderPokemonCard = () => {
    return (
      <PokemonCardButton
        onPress={() =>
          navigation.navigate("Details", {
            name: capitalize(name),
            details: results,
          })
        }
      >
        <PokemonCardImageContainer>
          <PokemonCardImage uri={results.sprites} />
        </PokemonCardImageContainer>
        <PokemonCardTextContainer>
          <PokemonCardText>{capitalize(name)}</PokemonCardText>
        </PokemonCardTextContainer>
        <PokemonCardTypeContainer>
          <PokemonType types={results.types} />
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
