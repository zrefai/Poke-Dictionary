import React from "react";
import { View, Text } from "react-native";
import { styles } from "./evolutionChainStyles";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { uuid } from "../../../../utils/uuid";
import useEvolutionSearch from "../../../../hooks/useEvolutionSearch";
import EvolutionLink from "../evolution-link/EvolutionLink";

const EvolutionInfoContainer = styled(View)`mt5 mh6 mb4`;
const EvolutionHeaderText = styled(Text, styles.detailsheaderText)``;
const EvolutionLinksContainer = styled(View, {
  flexDirection: "column",
})`aic`;

const EvolutionChain = ({ url, evolution_ID }) => {
  const [fetchEvolutionResults, results, error] = useEvolutionSearch(
    url,
    `@POKEMON_EVOLUTION_CHAIN_${evolution_ID}`,
    "EVOLUTION_CHAIN"
  );

  const renderEvolution = () => {
    if (results.length != 0) {
      /* Typical rendering of evolutions is repeated 3 times. Add async storage by creating a 
      useEvolutionSearch which processes the evolution chain at response, and saves it to async */
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

  return (
    <EvolutionInfoContainer>
      <EvolutionHeaderText>Evolutions: </EvolutionHeaderText>
      {results.length != 0
        ? results.map((item) => {
            return <EvolutionLink key={uuid()} link={item} />;
          })
        : null}
    </EvolutionInfoContainer>
  );
};

export default EvolutionChain;
