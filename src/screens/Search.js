import React from "react";
import { Text } from "react-native";
import useSearch from "../hooks/useSearch";
import PokemonSearch from "../components/pokemon-search/PokemonSearch";

const Search = ({ navigation }) => {
  const [results, error] = useSearch();

  const renderPokemonList = () => {
    if (results.length == 0 || error) return <Text>Loading</Text>;

    let pokemonMap = new Map();
    for (let i = 0; i < results.length; ++i) {
      pokemonMap.set(results[i].name, results[i].url);
    }

    return <PokemonSearch pokemonList={results} pokemonMap={pokemonMap} />;
  };
  return renderPokemonList();
};

export default Search;
