import React from "react";
import { View } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import uuid from "../../../utils/uuid";
import StyledText from "../../../styles/TextStyle";
import useEvolutionSearch from "../../../hooks/useEvolutionSearch";
import EvolutionLink from "./EvolutionLink";

const EvolutionInfoContainer = styled(View)`mt5 mh6 mb4`;

const EvolutionChain = ({ url, evolution_ID }) => {
  const [fetchEvolutionResults, results, error] = useEvolutionSearch(
    url,
    `@POKEMON_EVOLUTION_CHAIN_${evolution_ID}`,
    "EVOLUTION_CHAIN"
  );

  return (
    <EvolutionInfoContainer>
      <StyledText size={15} padtop={5} options={{ textAlign: "left" }}>
        Evolutions:
      </StyledText>
      {results.length != 0
        ? results.map((item) => {
            return <EvolutionLink key={uuid()} link={item} />;
          })
        : null}
    </EvolutionInfoContainer>
  );
};

export default EvolutionChain;
