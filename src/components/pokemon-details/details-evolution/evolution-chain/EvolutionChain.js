import React from "react";
import { View, Text } from "react-native";
import { styles } from "./evolutionChainStyles";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { clipID } from "../../../../utils/clipID";
import { uuid } from "../../../../utils/uuid";
import useSearch from "../../../../hooks/useSearch";
import EvolutionLink from "../evolution-link/EvolutionLink";

const EvolutionInfoContainer = styled(View)`mt5 mh6 mb4`;
const EvolutionHeaderText = styled(Text, styles.detailsheaderText)``;
const EvolutionLinksContainer = styled(View, {
  flexDirection: "column",
})`aic`;

const EvolutionChain = ({ url, evolution_ID }) => {
  const [fetchPokemonResults, results, error] = useSearch(
    url,
    `@POKEMON_EVOLUTION_CHAIN_${evolution_ID}`,
    "EVOLUTION_CHAIN"
  );

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

  const processEvolutionData = () => {
    let evolutions = [];
    let evolutionData = results.chain;

    do {
      let numOfEvolutions = evolutionData.evolves_to.length;
      const evoDetails = evolutionData.evolution_details;
      const evoDetails_len = evoDetails.length;
      // console.log("Name:", evolutionData.species.name);
      // console.log("EvoData:", evoDetails);
      evolutions = pushEvolutionData(
        evolutions,
        evoDetails[0],
        evoDetails_len,
        evolutionData.species.name,
        clipID(evolutionData.species.url)
      );

      if (numOfEvolutions > 1) {
        for (let i = 1; i < numOfEvolutions; i++) {
          evoDetails = evolutionData.evolves_to[i].evolution_details;
          evoDetails_len = evoDetails.length;
          // console.log("Name:", evolutionData.evolves_to[i].species.name);
          // console.log("EvoData:", evoDetails);
          evolutions = pushEvolutionData(
            evolutions,
            evoDetails[0],
            evoDetails_len,
            evolutionData.evolves_to[i].species.name,
            clipID(evolutionData.evolves_to[i].species.url)
          );
        }
      }
      evolutionData = evolutionData.evolves_to[0];
    } while (
      evolutionData != undefined &&
      evolutionData.hasOwnProperty("evolves_to")
    );
    return evolutions;
  };

  const renderEvolution = () => {
    if (results.length != 0) {
      /* Typical rendering of evolutions is repeated 3 times. Add async storage by creating a 
      useEvolutionSearch which processes the evolution chain at response, and saves it to async */
      const evoChain = processEvolutionData();
      console.log(evoChain);
      return (
        <EvolutionInfoContainer>
          <EvolutionHeaderText>Evolutions: </EvolutionHeaderText>
          <EvolutionLinksContainer>
            {evoChain.map((item) => {
              return <EvolutionLink key={uuid()} link={item} />;
            })}
          </EvolutionLinksContainer>
        </EvolutionInfoContainer>
      );
    }

    return null;
  };

  return renderEvolution();
};

export default EvolutionChain;
