import React from "react";
import { View } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import StyledText from "../../../styles/TextStyle";
import clipID from "../../../utils/clipID";
import EvolutionChain from "./EvolutionChain";
import useSearch from "../../../hooks/useSearch";
import DetailsError from "../DetailsError";

const EvolutionInfoContainer = styled(View)`mt5 mh6 mb4`;

const DetailsEvolution = ({ speciesURL }) => {
  const [results, error] = useSearch(speciesURL, "");

  const renderEvolutionChain = () => {
    if (error) return null;
    if (results.evolution_chain) {
      const evolutionURL = results.evolution_chain.url;
      return (
        <EvolutionChain
          url={evolutionURL}
          evolution_ID={clipID(evolutionURL)}
        />
      );
    }
    return (
      <DetailsError>
        Evolution data does not exist for this pokemon.
      </DetailsError>
    );
  };
  return (
    <EvolutionInfoContainer>
      <StyledText size={15} padtop={5} options={{ textAlign: "left" }}>
        Evolutions:
      </StyledText>
      {renderEvolutionChain()}
    </EvolutionInfoContainer>
  );
};

export default DetailsEvolution;
