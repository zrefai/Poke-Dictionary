import React, { useState, useEffect } from "react";
import axios from "axios";

export default (name, URL) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const getPokemon = async (pokemonURL) => {
    return await axios
      .create({
        url: pokemonURL,
      })
      .get(URL, { cancelToken: source.token })
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Error in response POKEMON CARD:", error.response.status);
          setError(error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("Error in response POKEMON CARD:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
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
