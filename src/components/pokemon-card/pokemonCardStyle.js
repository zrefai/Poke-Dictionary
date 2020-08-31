import { StyleSheet } from "react-native";
import { normalizeFont, normalizeUIW } from "../../styles/styleConfig";

const pokemonCardContainer = {
  flex: 1,
  borderRadius: 6,
  borderWidth: 2.5,
  borderColor: "#20232a",
  marginHorizontal: 6,
  marginVertical: 4,
  padding: 6,
};

const pokemonCardImageContainer = {
  flex: 2,
};

const pokemonCardTextContainer = {
  flex: 3,
  alignContent: "center",
  paddingTop: 2,
};

const pokemonCardText = {
  fontFamily: "Pokemon_GB",
  paddingTop: 1,
};

const pokemonCardTypeContainer = {
  alignContent: "center",
  justifyContent: "center",
};

export const styles = StyleSheet.create({
  pokemonCardContainer,
  pokemonCardImageContainer,
  pokemonCardText,
  pokemonCardTextContainer,
  pokemonCardTypeContainer,
});
