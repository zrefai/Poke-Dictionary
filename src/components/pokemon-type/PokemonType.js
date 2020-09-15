import React from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { normalizeUIW, regularText } from "../../styles/styleConfig";
import { useSelector } from "react-redux";
import { unown } from "../../selectors/index";
import typeColor from "./typeColor";

const PokemonTypeContainer = styled(View)`flx-wrap jcc aic`;
const PokemonTypeText = styled(Text)``;

const PokemonType = ({
  types,
  details_flag = 0,
  damage_flag = 0,
  moves_flag = 0,
}) => {
  const isUnown = useSelector(unown);
  const pokemonTypeAcc1 = (type) =>
    isUnown ? type.toLowerCase() : type.toUpperCase();
  const pokemonTypeAcc2 = (type) =>
    isUnown ? type.name.toLowerCase() : type.name.toUpperCase();
  const typeBorder = (size) => {
    return {
      borderRadius: 5,
      borderWidth: 2,
      minWidth: normalizeUIW(size),
      margin: 1,
    };
  };

  const PokemonTypeBackground = styled(
    View,
    damage_flag ? typeBorder(18) : moves_flag ? typeBorder(19) : typeBorder(20)
  )``;

  const determineTypeText = () => {
    if (details_flag)
      return regularText(
        10,
        4.5,
        { color: "white", paddingHorizontal: 5 },
        isUnown
      );
    if (damage_flag)
      return regularText(7, 4, { color: "white", paddingBottom: 1 }, isUnown);
    if (moves_flag)
      return regularText(7, 4, { color: "white", paddingBottom: 1 }, isUnown);
    return regularText(8.5, 4, { color: "white" }, isUnown);
  };

  const determineTypeColor = (type) => {
    if (damage_flag) return { backgroundColor: typeColor(type) };
    return { backgroundColor: typeColor(type.name) };
  };

  const determineDirection = () => {
    if (details_flag || damage_flag) return { flexDirection: "row" };
    return { flexDirection: "column" };
  };

  const renderPokemonType = (pokemonType, key) => {
    return (
      <PokemonTypeBackground key={key} style={determineTypeColor(pokemonType)}>
        <PokemonTypeText style={determineTypeText()}>
          {damage_flag
            ? pokemonTypeAcc1(pokemonType)
            : pokemonTypeAcc2(pokemonType)}
        </PokemonTypeText>
      </PokemonTypeBackground>
    );
  };

  return (
    <PokemonTypeContainer style={determineDirection()}>
      {types
        ? types.map((type, index) => {
            return renderPokemonType(
              damage_flag ? type : moves_flag ? type : type.type,
              index
            );
          })
        : undefined}
    </PokemonTypeContainer>
  );
};

export default PokemonType;
