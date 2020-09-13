import React from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./pokemonTypeStyles";

const PokemonTypeContainer = styled(View)``;
const PokemonTypeText = styled(Text)``;

const PokemonType = ({ types, details_flag = 0, damage_flag = 0 }) => {
  const PokemonTypeBackground = styled(
    View,
    damage_flag ? styles.typeBackgroundDamage : styles.typeBackground
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

  const renderPokemonType = (pokemonType, key) => {
    return (
      <PokemonTypeBackground
        key={key}
        style={{
          backgroundColor: typeColor(
            damage_flag ? pokemonType : pokemonType.name
          ),
        }}
      >
        <PokemonTypeText
          style={
            details_flag
              ? styles.typeTextDetails
              : damage_flag
              ? styles.typeTextDamage
              : styles.typeTextCard
          }
        >
          {damage_flag
            ? pokemonType.toUpperCase()
            : pokemonType.name.toUpperCase()}
        </PokemonTypeText>
      </PokemonTypeBackground>
    );
  };

  return (
    <PokemonTypeContainer
      style={
        details_flag || damage_flag
          ? styles.typeContainerRow
          : styles.typeContainerColumn
      }
    >
      {types
        ? types.map((type, index) => {
            return renderPokemonType(damage_flag ? type : type.type, index);
          })
        : undefined}
    </PokemonTypeContainer>
  );
};

export default PokemonType;
