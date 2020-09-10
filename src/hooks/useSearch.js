import React, { useState, useEffect } from "react";
import axios from "axios";
import { instance } from "../api/PokemonAPI";
import { errorLog } from "../utils/errorLog";
import AsyncStorage from "@react-native-community/async-storage";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const searchPokemon = async (URL) => {
    //Reset error here during a get in case reloading
    setError("");
    //AsyncStorage.clear();

    let master_list = await AsyncStorage.getItem("@MASTER_LIST");
    if (master_list !== null) {
      console.log("Async Storage @MASTER_LIST");
      setResults(JSON.parse(master_list));
      return;
    }

    return await instance
      .get(URL, { cancelToken: source.token })
      .then((response) => {
        console.log("Axios GET @MASTER_LIST");
        setResults(response.data.results);
        AsyncStorage.setItem(
          "@MASTER_LIST",
          JSON.stringify(response.data.results)
        );
      })
      .catch((error) => {
        errorLog(error, setError, 1);
      });
  };

  useEffect(() => {
    //TODO: Change it so that pokemon-species is used instead, better for naming
    searchPokemon("pokemon/?limit=1500");
    return () => {
      source.cancel();
    };
  }, []);

  return [results, error];
};
