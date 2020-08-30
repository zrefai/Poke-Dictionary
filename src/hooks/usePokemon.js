import React, { useState, useEffect } from "react";
import PokemonAPI from "../api/PokemonAPI";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const getPokemon = async (URL) => {
    try {
      const response = await PokemonAPI.get(URL);
      setResults(response.data);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    console.log("Hello");
    getPokemon("pokemon");
  }, []);

  return [getPokemon, results, error];
};
