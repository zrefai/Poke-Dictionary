import React, { useState, useEffect } from "react";
import axios from "axios";
import errorLog from "../utils/errorLog";
import clipID from "../utils/clipID";
import AsyncStorage from "@react-native-community/async-storage";

export default (URL, key, name = "") => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const pushEvolutionData = (data, evoDet, evoDetLen, name, id) => {
    data.push({
      name: name,
      ID: id,
      min_level: evoDetLen == 0 ? 1 : evoDet.min_level,
      trigger_name: evoDetLen == 0 ? null : evoDet.trigger.name,
      item:
        evoDetLen == 0 ? null : evoDet.item === null ? null : evoDet.item.name,
      happiness: evoDetLen == 0 ? null : evoDet.min_happiness,
      held_item:
        evoDetLen == 0
          ? null
          : evoDet.held_item === null
          ? null
          : evoDet.held_item.name,
      location:
        evoDetLen == 0
          ? null
          : evoDet.location == null
          ? null
          : evoDet.location.name,
      known_move:
        evoDetLen == 0
          ? null
          : evoDet.known_move == null
          ? null
          : evoDet.known_move.name,
    });
    return data;
  };

  /*Original variant of this algorithm is from stackoverflow. It was modified to fit the needs of this project
  https://stackoverflow.com/questions/39112862/pokeapi-angular-how-to-get-pokemons-evolution-chain*/
  const processEvolutionData = (data) => {
    let evolutions = [];

    do {
      let numOfEvolutions = data.evolves_to.length;
      const evoDetails = data.evolution_details;
      const evoDetails_len = evoDetails.length;
      // console.log("Name:", evolutionData.species.name);
      // console.log("EvoData:", evoDetails);
      evolutions = pushEvolutionData(
        evolutions,
        evoDetails[0],
        evoDetails_len,
        data.species.name,
        clipID(data.species.url)
      );

      if (numOfEvolutions > 1) {
        for (let i = 1; i < numOfEvolutions; i++) {
          evoDetails = data.evolves_to[i].evolution_details;
          evoDetails_len = evoDetails.length;
          // console.log("Name:", evolutionData.evolves_to[i].species.name);
          // console.log("EvoData:", evoDetails);
          evolutions = pushEvolutionData(
            evolutions,
            evoDetails[0],
            evoDetails_len,
            data.evolves_to[i].species.name,
            clipID(data.evolves_to[i].species.url)
          );
        }
      }
      data = data.evolves_to[0];
    } while (data != undefined && data.hasOwnProperty("evolves_to"));
    return evolutions;
  };

  const fetchEvolutionResults = async () => {
    //Reset error on reload of results
    setError("");
    AsyncStorage.clear();

    if (key) {
      let results_data = await AsyncStorage.getItem(key);
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
        //console.log("Axios GET", key);
        const evolutionChain = processEvolutionData(response.data.chain);
        setResults(evolutionChain);
        if (key) AsyncStorage.setItem(key, JSON.stringify(evolutionChain));
      })
      .catch((error) => {
        errorLog(error, setError, name);
      });
  };

  useEffect(() => {
    fetchEvolutionResults();

    return () => {
      source.cancel();
    };
  }, []);

  return [fetchEvolutionResults, results, error];
};
