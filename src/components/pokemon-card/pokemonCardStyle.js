import { StyleSheet } from "react-native";
import { normalizeUIH } from "../../styles/styleConfig";

const pokemonCardContainer = {
  flex: 1,
  minHeight: normalizeUIH(12),
  borderRadius: 6,
  borderWidth: 2.5,
  borderColor: "#20232a",
  marginHorizontal: 6,
  marginVertical: 4,
  padding: 6,
  justifyContent: "center",
};

const pokemonCardTextContainer = {
  flex: 3,
  alignContent: "center",
  paddingTop: 3,
};

export const styles = StyleSheet.create({
  pokemonCardContainer,
  pokemonCardTextContainer,
});
