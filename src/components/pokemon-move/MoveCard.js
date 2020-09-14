import React from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./moveCardStyle";
import { regularText } from "../../styles/styleConfig";
import stringFormatter from "../../utils/stringFormatter";
import clipID from "../../utils/clipID";
import useSearch from "../../hooks/useSearch";
import PokemonType from "../pokemon-type/PokemonType";

const MovesCardContainer = styled(
  View,
  styles.detailsMoveCardContainer
)`flx-i flx-row`;
const MovesTypeContainer = styled(View)`aic mb1`;
const MovesStatsCell = styled(View)`flx-row mv2`;
const MovesInfoText = styled(
  Text,
  regularText(9, 5, { paddingBottom: 1 })
)`mv2`;
const MovesInfoContainer = styled(View, {
  flexDirection: "column",
})`flx-i aic mv2 mh3`;
const MovesStatsContainer = styled(View, {
  flexDirection: "column",
})`flx-i jcc aic`;

const MoveCard = ({ name, url, details_flag = 0 }) => {
  const [fetchMoveResults, results, error] = useSearch(
    url,
    `@POKEMON_MOVE_${clipID(url)}`,
    name
  );

  const MovesStatsText = styled(
    Text,
    details_flag
      ? regularText(7, 3, { textAlign: "left" })
      : regularText(8.5, 3, { textAlign: "left", marginRight: 2 })
  )`flx-i ml1`;

  const renderInfo = () => {
    return (
      <MovesInfoContainer>
        <MovesInfoText>{stringFormatter(name, "-")}</MovesInfoText>
        <MovesTypeContainer>
          <PokemonType types={[results.type]} moves_flag={1} />
        </MovesTypeContainer>
      </MovesInfoContainer>
    );
  };

  const renderStats = () => {
    return (
      <MovesStatsContainer>
        <MovesStatsCell>
          <MovesStatsText>{`AC: ${
            results.accuracy ? results.accuracy : "0"
          }`}</MovesStatsText>
          <MovesStatsText>{`PP: ${results.pp}`}</MovesStatsText>
        </MovesStatsCell>
        <MovesStatsCell>
          <MovesStatsText>{`PW: ${
            results.power ? results.power : "0"
          }`}</MovesStatsText>
          <MovesStatsText>{`PR: ${results.priority}`}</MovesStatsText>
        </MovesStatsCell>
      </MovesStatsContainer>
    );
  };

  const renderMovesCard = () => {
    if (results.name) {
      return (
        <MovesCardContainer>
          {renderInfo()}
          {renderStats()}
        </MovesCardContainer>
      );
    }
    return null;
  };

  return renderMovesCard();
};

export default MoveCard;
