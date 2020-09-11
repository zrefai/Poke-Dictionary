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
const EvolutionLinksContainer = styled(View)`flx-wrap flx-row aic`;

const EvolutionChain = ({ url, evolution_ID }) => {
  const [fetchPokemonResults, results, error] = useSearch(
    url,
    `@POKEMON_EVOLUTION_CHAIN_${evolution_ID}`,
    "EVOLUTION_CHAIN"
  );

  const processEvolutionData = () => {
    let evolutions = [];
    let evolutionData = results.chain;

    do {
      let numOfEvolutions = evolutionData.evolves_to.length;
      const evoDetails = evolutionData.evolution_details;

      evolutions.push({
        name: evolutionData.species.name,
        ID: clipID(evolutionData.species.url),
        min_level: evoDetails.length == 0 ? 1 : evoDetails[0].min_level,
        trigger_name:
          evoDetails.length == 0 ? null : evoDetails[0].trigger.name,
      });

      if (numOfEvolutions > 1) {
        for (let i = 1; i < numOfEvolutions; i++) {
          evoDetails = evolutionData.evolves_to[i].evolution_details;
          evolutions.push({
            name: evolutionData.evolves_to[i].species.name,
            ID: clipID(evolutionData.evolves_to[i].species.url),
            min_level: evoDetails.length == 0 ? 1 : evoDetails[0].min_level,
            trigger_name:
              evoDetails.length == 0 ? null : evoDetails[0].trigger.name,
          });
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
