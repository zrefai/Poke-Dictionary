import React, { useState, useEffect } from "react";
import axios from "axios";
import { errorLog } from "../utils/errorLog";
import AsyncStorage from "@react-native-community/async-storage";

export default (name, URL) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const getPokemon = async (pokemonURL) => {
    setError("");

    let pokemon_data = await AsyncStorage.getItem(
      `@POKEMON_${name.toUpperCase()}`
    );
    if (pokemon_data !== null) {
      // console.log(`Async Storage @POKEMON_${name.toUpperCase()}`);
      setResults(JSON.parse(pokemon_data));
      return;
    }

    return await axios
      .create({
        url: pokemonURL,
      })
      .get(URL, { cancelToken: source.token })
      .then((response) => {
        // console.log(`Axios GET @POKEMON_${name.toUpperCase()}`);
        setResults(response.data);
        AsyncStorage.setItem(
          `@POKEMON_${name.toUpperCase()}`,
          JSON.stringify(response.data)
        );
      })
      .catch((error) => {
        errorLog(error, setError, name);
      });
  };

  useEffect(() => {
    getPokemon(URL);

    return () => {
      source.cancel();
    };
  }, []);

  return [getPokemon, results, error];
};
