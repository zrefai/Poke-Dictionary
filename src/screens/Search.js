import React from "react";
import { SafeAreaView } from "react-native";
import PokemonSearch from "../components/pokemon-search/PokemonSearch";
import useSearch from "../hooks/useSearch";
import Loading from "../components/loading/Loading";

const pokemonURL = "https://pokeapi.co/api/v2/pokemon/?limit=1500";

const Search = () => {
  const [results, error] = useSearch(pokemonURL, "@MASTER_LIST");

  const renderPokemonList = () => {
    if (results.length === 0 || error) return <Loading />;

    return <PokemonSearch pokemonList={results.results} />;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {renderPokemonList()}
    </SafeAreaView>
  );
};

export default Search;
