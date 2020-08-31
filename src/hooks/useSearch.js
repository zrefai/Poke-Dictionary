import React, { useState, useEffect } from "react";
import PokemonAPI from "../api/PokemonAPI";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchPokemon = async (URL) => {
    //Reset error here during a get in case reloading
    //404, undefined
    setError("");

    return await PokemonAPI.get(URL)
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
    searchPokemon("pokemon");
  }, []);

  return [searchPokemon, results, error];
};
