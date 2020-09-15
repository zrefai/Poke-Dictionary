import React from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./moveCardStyle";
import { regularText } from "../../styles/styleConfig";
import StyledText from "../../styles/TextStyle";
import stringFormatter from "../../utils/stringFormatter";
import clipID from "../../utils/clipID";
import useSearch from "../../hooks/useSearch";
import PokemonType from "../pokemon-type/PokemonType";

const MovesTypeContainer = styled(View)`aic mb1`;
const MovesStatsCell = styled(View)`flx-row mv2`;
const MovesInfoContainer = styled(View, {
  flexDirection: "column",
})`flx-i aic mv2 mh3`;
const MovesStatsContainer = styled(View, {
  flexDirection: "column",
})`flx-i jcc aic`;
const MovesCardContainer = styled(
  View,
  styles.detailsMoveCardContainer
)`flx-i flx-row`;

const MoveCard = ({ name, url, details_flag = 0 }) => {
  const [results, error] = useSearch(url, `@POKEMON_MOVE_${clipID(url)}`, name);

  const MovesStatsText = styled(
    Text,
    details_flag
      ? regularText(7, 3, { textAlign: "left" })
      : regularText(8.5, 3, { textAlign: "left", marginRight: 2 })
  )`flx-i ml1`;

  const renderInfo = () => {
    return (
      <MovesInfoContainer>
        <StyledText
          size={details_flag ? 9 : 10}
          padtop={5}
          options={{ paddingBottom: 1, marginBottom: 3 }}
        >
          {stringFormatter(name, "-")}
        </StyledText>
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
