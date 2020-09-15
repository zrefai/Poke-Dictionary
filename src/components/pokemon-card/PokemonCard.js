import React, { memo } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./pokemonCardStyle";
import { commonStyles } from "../../styles/styleConfig";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { unown } from "../../selectors";
import capitalize from "../../utils/capitalize";
import PokemonType from "../pokemon-type/PokemonType";
import PokemonCardImage from "./pokemon-card-image/PokemonCardImage";
import useSearch from "../../hooks/useSearch";
import StyledText from "../../styles/TextStyle";

const PokemonCardContainer = styled(View, styles.pokemonCardContainer)``;
const PokemonCardNothingText = styled(Text, commonStyles.PokemonGB)`jcc asc`;
const PokemonCardButton = styled(TouchableOpacity)`flx-i flx-row`;
const PokemonCardImageContainer = styled(View, { flex: 2 })``;
const PokemonCardTypeContainer = styled(View, {
  alignContent: "center",
  marginRight: 3,
})`jcc `;
const PokemonCardTextContainer = styled(
  View,
  styles.pokemonCardTextContainer
)`jcc`;

const PokemonCard = ({ name, url }) => {
  const isUnown = useSelector(unown);
  const navigation = useNavigation();
  const [results, error] = useSearch(
    url,
    `@POKEMON_${name.toUpperCase()}`,
    name
  );

  const renderPokemonCard = () => {
    return (
      <PokemonCardButton
        onPress={() =>
          navigation.navigate("Details", {
            //TODO: Do something about this
            name: capitalize(name, isUnown),
            details: results,
          })
        }
      >
        <PokemonCardImageContainer>
          <PokemonCardImage uri={results.sprites} />
        </PokemonCardImageContainer>
        <PokemonCardTextContainer>
          <StyledText size={11} padtop={3} options={{ textAlign: "left" }}>
            {capitalize(name)}
          </StyledText>
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
