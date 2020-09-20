import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { useSelector } from "react-redux";
import { favorites } from "../redux/selectors";
import uuid from "../utils/uuid";
import StyledText from "../styles/TextStyle";
import PokemonCard from "../components/pokemon-card/PokemonCard";

const noFavoritesText = "You don't have any favorites yet!";
const NoFavoritesTextContainer = styled(View, {
  alignContent: "center",
})`asc mt7 ma6`;

const Favorites = () => {
  const favoritesList = useSelector(favorites);

  const renderFavoritesList = () => {
    if (favoritesList.length)
      return favoritesList.map((pokemon) => (
        <PokemonCard key={uuid()} name={pokemon.name} url={pokemon.url} />
      ));
    return (
      <NoFavoritesTextContainer>
        <StyledText
          size={10}
          padtop={5}
          options={{ color: "#898989", lineHeight: 16 }}
        >
          {noFavoritesText}
        </StyledText>
      </NoFavoritesTextContainer>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, width: "100%", marginTop: 5 }}>
        {renderFavoritesList()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
