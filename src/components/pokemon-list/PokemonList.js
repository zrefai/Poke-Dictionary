import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./pokemonListStyles";
import uuid from "../../utils/uuid";
import PokemonCard from "../pokemon-card/PokemonCard";
import StyledText from "../../styles/TextStyle";

const returnText =
  "Hit enter on current search to load pokemon that haven't shown up in the list yet";
const NothingView = styled(View)`mv5`;
const LoadMoreButton = styled(TouchableOpacity, styles.loadMoreButton)`aic`;
const ReturnTextContainer = styled(View, {
  alignContent: "center",
})`asc mt7 ma6`;

const PokemonList = ({ pokemonList, searching, onLoadMore }) => {
  const renderLoadMore = () => {
    if (searching) {
      return <NothingView />;
    }

    return (
      <LoadMoreButton onPress={() => onLoadMore()}>
        <StyledText
          size={12}
          padtop={7}
          options={{
            color: "white",
            paddingBottom: 3,
            paddingHorizontal: 6,
          }}
        >
          LOAD MORE
        </StyledText>
      </LoadMoreButton>
    );
  };

  const renderPokemonList = () => {
    if (pokemonList.length > 0) {
      return pokemonList.map((pokemon) => (
        <PokemonCard key={uuid()} name={pokemon.name} url={pokemon.url} />
      ));
    }
    return null;
  };

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      maintainVisibleContentPosition={{
        minIndexForVisible: 0,
      }}
      style={{ flex: 1, width: "100%" }}
    >
      {renderPokemonList()}
      {renderLoadMore()}
    </ScrollView>
  );
};

export default PokemonList;
