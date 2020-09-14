import React from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./detailsMovesListStyles";
import { commonStyles, regularText } from "../../../styles/styleConfig";
import clipID from "../../../utils/clipID";
import useSearch from "../../../hooks/useSearch";
import PokemonType from "../../pokemon-type/PokemonType";

const DetailsMovesListCell = styled(
  View,
  styles.detailsMoveListCell
)`flx-i flx-row`;
const DetailsMovesTypeContainer = styled(View)`aic`;
const DetailsMovesStatsCell = styled(View)`flx-row mv2`;
const DetailsMovesStatsText = styled(
  Text,
  regularText(7, 3, { textAlign: "left" })
)`flx-i ml1`;
const DetailsMovesInfoText = styled(
  Text,
  regularText(9, 5, { paddingBottom: 1 })
)`mv2`;
const DetailsMovesInfoContainer = styled(View, {
  flexDirection: "column",
})`flx-i aic mv2 mh3`;
const DetailsMovesStatsContainer = styled(View, {
  flexDirection: "column",
})`flx-i jcc aic`;

const DetailsMoveCard = ({ name, url }) => {
  const [fetchMoveResults, results, error] = useSearch(
    url,
    `@POKEMON_MOVE_${clipID(url)}`,
    name
  );

  const renderInfo = () => {
    return (
      <DetailsMovesInfoContainer>
        <DetailsMovesInfoText>{name}</DetailsMovesInfoText>
        <DetailsMovesTypeContainer>
          <PokemonType types={[results.type]} moves_flag={1} />
        </DetailsMovesTypeContainer>
      </DetailsMovesInfoContainer>
    );
  };

  const renderStats = () => {
    return (
      <DetailsMovesStatsContainer>
        <DetailsMovesStatsCell>
          <DetailsMovesStatsText>{`ACC: ${
            results.accuracy ? results.accuracy : "0"
          }`}</DetailsMovesStatsText>
          <DetailsMovesStatsText>{`PP: ${results.pp}`}</DetailsMovesStatsText>
        </DetailsMovesStatsCell>
        <DetailsMovesStatsCell>
          <DetailsMovesStatsText>{`PW: ${
            results.power ? results.power : "0"
          }`}</DetailsMovesStatsText>
          <DetailsMovesStatsText>{`PR: ${results.priority}`}</DetailsMovesStatsText>
        </DetailsMovesStatsCell>
      </DetailsMovesStatsContainer>
    );
  };

  const renderMovesCard = () => {
    if (results.name) {
      return (
        <DetailsMovesListCell>
          {renderInfo()}
          {renderStats()}
        </DetailsMovesListCell>
      );
    }
    return null;
  };

  return renderMovesCard();
};

export default DetailsMoveCard;
