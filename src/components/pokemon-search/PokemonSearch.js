import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { instance, pokemonURL } from "../../api/PokemonAPI";
import SearchBar from "../search-bar/SearchBar";
import PokemonList from "../pokemon-list/PokemonList";
import { styles } from "./PokemonSearchStyles";

const SearchContainer = styled(View)`flx-i bg-white`;
const NothingHereContainer = styled(
  View,
  styles.nothingHereContainer
)`asc mt7 ma6`;
const NothingHereText = styled(Text, styles.nothingHereText)`pt1 lh-solid `;

const PokemonSearch = ({ pokemonList, pokemonMap }) => {
  const [term, setTerm] = useState("");
  const [index, setIndex] = useState(20);
  const [pokeList, setPokeList] = useState(pokemonList.slice(0, index));
  const [searchError, setSearchError] = useState(false);
  const [searchFilterResults, setSearchFilterResults] = useState(
    pokemonList.slice(0, index)
  );

  const checkSearchFilterResults = (searchTerm) => {
    for (let i = 0; i < searchFilterResults.length; ++i) {
      if (searchFilterResults[i].name === searchTerm) {
        return true;
      }
    }
    return false;
  };

  const newSearch = (searchTerm) => {
    searchTerm = searchTerm.replace(/^\s+|\s+$/gm, "").toLowerCase();

    if (pokemonMap.has(searchTerm)) {
      if (checkSearchFilterResults(searchTerm)) return;
      let newFilterResults = searchFilterResults;
      let newFilterEntry = {
        name: searchTerm,
        url: pokemonMap.get(searchTerm),
      };

      newFilterResults.push(newFilterEntry);
      setSearchFilterResults(newFilterResults);
      searchFilter(term);
    } else {
      setSearchError(true);
    }
  };

  const searchFilter = (newTerm) => {
    setSearchError(false);
    setTerm(newTerm);

    const newSearchResults = searchFilterResults.filter((item) => {
      const name = `${item.name.toLowerCase()}`;
      const searchTerm = newTerm.toLowerCase();

      return name.indexOf(searchTerm) > -1;
    });

    //If new search results yields from currently loaded list
    if (newSearchResults) setPokeList(newSearchResults);
  };

  return (
    <SearchContainer>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => searchFilter(newTerm)}
        onTermSubmit={() => newSearch(term)}
      />
      {searchError ? (
        <NothingHereContainer>
          <NothingHereText>Pokemon does not exist.</NothingHereText>
          <NothingHereText>Please try again.</NothingHereText>
        </NothingHereContainer>
      ) : (
        <PokemonList pokemonList={pokeList} />
      )}
      {/*index change prop here in pokemonList*/}
    </SearchContainer>
  );
};

export default PokemonSearch;
