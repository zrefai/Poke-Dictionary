import { useState, useEffect } from "react";
import axios from "axios";
import errorLog from "../utils/errorLog";
import AsyncStorage from "@react-native-community/async-storage";

export default (URL, key, name = "") => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const fetchPokemonResults = async () => {
    //Reset error on reload of results
    setError("");

    if (key) {
      let results_data = await AsyncStorage.getItem(key);
      //console.log(`Axios Results with ${key}:`, !!results_data);
      if (results_data !== null) {
        //console.log("Async Storage", key);
        setResults(JSON.parse(results_data));
        return;
      }
    }

    return await axios
      .create({ url: URL })
      .get(URL, { cancelToken: source.token })
      .then((response) => {
        //console.log("Axios GET", url);
        setResults(response.data);
        if (key) AsyncStorage.setItem(key, JSON.stringify(response.data));
      })
      .catch((error) => {
        errorLog(error, setError, name);
      });
  };

  useEffect(() => {
    fetchPokemonResults();

    return () => {
      source.cancel();
    };
  }, []);

  return [fetchPokemonResults, results, error];
};
