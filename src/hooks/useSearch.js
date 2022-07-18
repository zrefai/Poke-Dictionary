import { useState, useEffect } from "react";
import axios from "axios";
import errorLog from "../utils/errorLog";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (URL, key, name = "") => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const fetchPokemonResults = async (source) => {
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
        //console.log("Axios GET", URL);
        setResults(response.data);
        if (key) AsyncStorage.setItem(key, JSON.stringify(response.data));
      })
      .catch((error) => {
        errorLog(error, setError, name, "useSearch", URL);
      });
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    fetchPokemonResults(source);
    return () => {
      source.cancel();
    };
  }, []);

  return [results, error];
};
