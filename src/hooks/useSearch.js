import React, { useState, useEffect } from "react";
import axios from "axios";
import { instance } from "../api/PokemonAPI";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const searchPokemon = async (URL) => {
    //Reset error here during a get in case reloading
    //404, undefined
    setError("");

    return await instance
      .get(URL, { cancelToken: source.token })
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.status);
          setError(error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
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
