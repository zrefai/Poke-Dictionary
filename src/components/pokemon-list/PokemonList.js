import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { uuid } from "../../utils/uuid";
import PokemonCard from "../pokemon-card/PokemonCard";

//Create an add more pokemon button, pass the function down here to manipulate
//State an index state in search

const PokemonList = ({ pokemonList }) => {
  return (
    <ScrollView style={{ width: "100%" }}>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard key={uuid()} name={pokemon.name} url={pokemon.url} />
        );
      })}
    </ScrollView>
  );
};

export default PokemonList;
