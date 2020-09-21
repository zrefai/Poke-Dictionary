import React from "react";
import uuid from "../../../utils/uuid";
import useEvolutionSearch from "../../../hooks/useEvolutionSearch";
import EvolutionLink from "./EvolutionLink";
import DetailsError from "../DetailsError";

const EvolutionChain = ({ url, evolution_ID }) => {
  const [results, error] = useEvolutionSearch(
    url,
    `@POKEMON_EVOLUTION_CHAIN_${evolution_ID}`,
    "EVOLUTION_CHAIN"
  );

  const renderEvolutionChain = () => {
    if (error) {
      return (
        <DetailsError>
          Evolution data does not exist, or there was an error fetching it.
        </DetailsError>
      );
    }
    if (results.length) {
      return results.map((item) => {
        return <EvolutionLink key={uuid()} link={item} />;
      });
    }
    return null;
  };

  return renderEvolutionChain();
};

export default EvolutionChain;
