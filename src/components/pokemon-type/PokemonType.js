import React from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { normalizeUIW, regularText } from "../../styles/styleConfig";

const PokemonTypeContainer = styled(View)`flx-wrap jcc aic`;
const PokemonTypeText = styled(Text)``;

const PokemonType = ({ types, details_flag = 0, damage_flag = 0 }) => {
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
    damage_flag ? typeBorder(18) : typeBorder(20)
  )``;

  const typeColor = (type) => {
    switch (type) {
      case "grass":
        return "#438C30";
      case "fire":
        return "#D93023";
      case "water":
        return "#2C6EB0";
      case "normal":
        return "#BCB5B3";
      case "electric":
        return "#EB9538";
      case "fire":
        return "#EB4770";
      case "fighting":
        return "#6D2A0F";
      case "rock":
        return "#A28841";
      case "ground":
        return "#D2B160";
      case "flying":
        return "#5F7DD7";
      case "bug":
        return "#88952F";
      case "poison":
        return "#833581";
      case "psychic":
        return "#E66488";
      case "dark":
        return "#472E1D";
      case "ghost":
        return "#5860AA";
      case "ice":
        return "#5FD1F4";
      case "steel":
        return "#8E8E9C";
      case "dragon":
        return "#7D6AD5";
      case "fairy":
        return "#ECA4EC";
    }
  };

  const determineTypeText = () => {
    if (details_flag)
      return regularText(10, 4.5, { color: "white", paddingHorizontal: 5 });
    if (damage_flag)
      return regularText(7, 4, { color: "white", paddingBottom: 1 });
    return regularText(8.5, 4, { color: "white" });
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
            ? pokemonType.toUpperCase()
            : pokemonType.name.toUpperCase()}
        </PokemonTypeText>
      </PokemonTypeBackground>
    );
  };

  return (
    <PokemonTypeContainer style={determineDirection()}>
      {types
        ? types.map((type, index) => {
            return renderPokemonType(damage_flag ? type : type.type, index);
          })
        : undefined}
    </PokemonTypeContainer>
  );
};

export default PokemonType;
