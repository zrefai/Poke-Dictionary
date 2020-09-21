import React, { memo } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./pokemonCardStyle";
import { commonStyles } from "../../styles/styleConfig";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { unown } from "../../redux/selectors";
import stringFormatter from "../../utils/stringFormatter";
import capitalize from "../../utils/capitalize";
import PokemonType from "../pokemon-type/PokemonType";
import PokemonCardImage from "./pokemon-card-image/PokemonCardImage";
import useSearch from "../../hooks/useSearch";
import StyledText from "../../styles/TextStyle";

const PokemonCardContainer = styled(View, styles.pokemonCardContainer)``;
const PokemonCardNothingText = styled(Text, commonStyles.PokemonGB)`jcc asc`;
const PokemonCardButton = styled(TouchableOpacity)`flx-i flx-row`;
const PokemonCardTypeContainer = styled(View, {
  alignContent: "center",
  flex: 1.7,
})`jcc aic mh2`;
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
            name: capitalize(name, isUnown),
            details: results,
          })
        }
      >
        <PokemonCardImage sprites={results.sprites} />
        <PokemonCardTextContainer>
          <StyledText
            size={11}
            padtop={3}
            options={{ textAlign: "left", lineHeight: 18 }}
          >
            {stringFormatter(name, "-")}
          </StyledText>
        </PokemonCardTextContainer>
        <PokemonCardTypeContainer>
          <PokemonType types={results.types} />
        </PokemonCardTypeContainer>
      </PokemonCardButton>
    );
  };

  const renderPokemonCardContainer = () => {
    if (error) return null;
    if (results)
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

  return renderPokemonCardContainer();
};

export default memo(PokemonCard);
