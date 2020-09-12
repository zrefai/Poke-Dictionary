import React from "react";
import {
  FlatList,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./pokemonListStyles";
import uuid from "../../utils/uuid";
import PokemonCard from "../pokemon-card/PokemonCard";

const LoadMoreButton = styled(TouchableOpacity, styles.loadMoreButton)`aic`;
const LoadMoreButtonText = styled(Text, styles.loadMoreText)``;
const ReturnTextContainer = styled(
  View,
  styles.returnTextContainer
)`asc mt7 ma6`;
const ReturnText = styled(Text, styles.returnText)`lh-solid`;
const NothingView = styled(View)`mv5`;

const PokemonList = ({ pokemonList, searching, onLoadMore }) => {
  const renderLoadMore = () => {
    if (searching) {
      return <NothingView />;
    }

    return (
      <LoadMoreButton onPress={() => onLoadMore()}>
        <LoadMoreButtonText>LOAD MORE</LoadMoreButtonText>
      </LoadMoreButton>
    );
  };

  return (
    <ScrollView style={{ flex: 1, width: "100%" }}>
      {pokemonList.length > 0 ? (
        pokemonList.map((pokemon) => {
          return (
            <PokemonCard key={uuid()} name={pokemon.name} url={pokemon.url} />
          );
        })
      ) : (
        <ReturnTextContainer>
          <ReturnText>
            Hit enter on current search to load pokemon that haven't shown up in
            the list yet
          </ReturnText>
        </ReturnTextContainer>
      )}
      {renderLoadMore()}
    </ScrollView>
    //TODO: Revisit flatlist because currently its causing issues
    // <FlatList
    //   data={pokemonList}
    //   renderItem={({ item }) => {
    //     return <PokemonCard key={uuid()} name={item.name} url={item.url} />;
    //   }}
    //   keyExtractor={(item) => item.url}
    //   ListFooterComponent={renderLoadMore()}
    // />
  );
};

export default PokemonList;
