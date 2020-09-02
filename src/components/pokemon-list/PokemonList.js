import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import { uuid } from "../../utils/uuid";
import { styled } from "@shipt/react-native-tachyons";
import PokemonCard from "../pokemon-card/PokemonCard";
import { styles } from "./pokemonListStyles";

const LoadMoreButton = styled(TouchableOpacity, styles.loadMoreButton)`aic`;
const LoadMoreButtonText = styled(Text, styles.loadMoreText)``;
const NothingView = styled(View)`mv5`;

const PokemonList = ({ pokemonList, searching, onLoadMore }) => {
  return (
    <ScrollView style={{ flex: 1, width: "100%" }}>
      {/*Transform into flatlist where button is footer component*/}
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard key={uuid()} name={pokemon.name} url={pokemon.url} />
        );
      })}
      {searching ? (
        <NothingView />
      ) : (
        <LoadMoreButton onPress={() => onLoadMore()}>
          <LoadMoreButtonText>Load More</LoadMoreButtonText>
        </LoadMoreButton>
      )}
    </ScrollView>
  );
};

export default PokemonList;
