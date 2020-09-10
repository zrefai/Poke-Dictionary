import React from "react";
import { View, Text } from "react-native";
import PokemonSearch from "../components/pokemon-search/PokemonSearch";
import useSearch from "../hooks/useSearch";
import Loading from "../components/loading/Loading";

const pokemonURL = "https://pokeapi.co/api/v2/pokemon/?limit=1500";

const Search = () => {
  const [fetchPokemonResults, results, error] = useSearch(
    pokemonURL,
    "@MASTER_LIST"
  );

  const renderPokemonList = () => {
    if (results.length == 0 || error) return <Loading />;

    let pokemonMap = new Map();
    for (let i = 0; i < results.length; ++i) {
      pokemonMap.set(results[i].name, results[i].url);
    }

    return <PokemonSearch pokemonList={results} pokemonMap={pokemonMap} />;
  };
  return renderPokemonList();
};

export default Search;
