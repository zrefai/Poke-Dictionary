import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import SearchBar from "../components/search-bar/SearchBar";
import usePokemon from "../hooks/useSearch";
import PokemonCard from "../components/pokemon-card/PokemonCard";

const SearchContainer = styled(View)`flx-i bg-white`;

const Search = () => {
  const [term, setTerm] = useState("");
  const [searchPokemon, results, error] = usePokemon();

  return (
    <SearchContainer>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchPokemon(`pokemon/${term.toLowerCase()}`)}
      />
      <ScrollView style={{ width: "100%" }}>
        {results.map((pokemon, index) => {
          return (
            <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
          );
        })}
      </ScrollView>
    </SearchContainer>
  );
};

export default Search;
