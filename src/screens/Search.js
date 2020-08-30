import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import SearchBar from "../components/search-bar/SearchBar";
import usePokemon from "../hooks/usePokemon";

const SearchContainer = styled(View)`flx-i bg-white aic`;

const Search = () => {
  const [term, setTerm] = useState("");
  const [getPokemon, results, error] = usePokemon();
  const onTermSubmit = (term) => getPokemon(`pokemon/${term}`);

  console.log(term);
  console.log(results);

  //Make component to grab specific pokemon, store results in state

  return (
    <SearchContainer>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => getPokemon(`pokemon/${term.toLowerCase()}`)}
      />
    </SearchContainer>
  );
};

export default Search;
