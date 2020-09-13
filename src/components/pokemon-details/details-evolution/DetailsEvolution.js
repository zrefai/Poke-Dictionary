import React from "react";
import { View, Text } from "react-native";
import clipID from "../../../utils/clipID";
import EvolutionChain from "./evolution-chain/EvolutionChain";
import useSearch from "../../../hooks/useSearch";

const pokemonSpeciesURL = "https://pokeapi.co/api/v2/pokemon-species/";

const DetailsEvolution = ({ id }) => {
  const [fetchPokemonResults, results, error] = useSearch(
    `${pokemonSpeciesURL}${id}`,
    ""
  );

  const renderEvolutionChain = () => {
    if (results.length != 0) {
      //   console.log("Results in evolution:", results);
      const evolutionURL = results.evolution_chain.url;
      return (
        <EvolutionChain
          url={evolutionURL}
          evolution_ID={clipID(evolutionURL)}
        />
      );
    }

    //TODO: handle errors from no evolutions potentially
    return <View></View>;
  };
  return renderEvolutionChain();
};

export default DetailsEvolution;
