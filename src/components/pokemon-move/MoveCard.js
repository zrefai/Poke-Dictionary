import React from "react";
import { View } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./moveCardStyle";
import StyledText from "../../styles/TextStyle";
import stringFormatter from "../../utils/stringFormatter";
import clipID from "../../utils/clipID";
import useSearch from "../../hooks/useSearch";
import PokemonType from "../pokemon-type/PokemonType";
import {
  renderAilment,
  renderDamageandHeal,
  renderNetStats,
  renderOneLineStat,
  renderShortStats,
} from "./moveCategories";

const MovesTypeContainer = styled(View)`aic mb1`;
const MovesInfoContainer = styled(View, {
  flexDirection: "column",
})`flx-i jcc aic mv2 mh3`;
const MovesStatsContainer = styled(View, {
  flexDirection: "column",
})`flx-i jcc aic`;
const MovesCardContainer = styled(
  View,
  styles.detailsMoveCardContainer
)`flx-i flx-row`;

const MoveCard = ({ name, url, details_flag = 0 }) => {
  const [results, error] = useSearch(url, `@POKEMON_MOVE_${clipID(url)}`, name);

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

  //ERROR HANDLE UNDEFINED VALUES POTENTIALLY
  const renderStats = () => {
    const categoryName = results.meta.category.name;
    if (categoryName === "damage")
      return renderShortStats(results, details_flag);
    if (categoryName === "unique")
      return renderShortStats(results, details_flag, 1);
    if (categoryName === "damage+ailment")
      return renderAilment(
        results.meta.ailment.name,
        details_flag,
        0,
        results.target.name
      );
    if (categoryName === "net-good-stats")
      return renderNetStats(results, details_flag);
    if (categoryName === "damage+lower")
      return renderNetStats(results, details_flag, "DMG and ");
    if (categoryName === "ailment")
      return renderAilment(
        results.meta.ailment.name,
        details_flag,
        1,
        results.target.name
      );
    if (categoryName === "damage+raise")
      return renderNetStats(results, details_flag, "DMG and ");
    if (categoryName === "whole-field-effect")
      return renderOneLineStat(
        `Field Effect: ${stringFormatter(
          results.target.name.toUpperCase(),
          "-"
        )}`,
        details_flag
      );
    if (categoryName === "field-effect")
      return renderOneLineStat(
        `Field Effect: ${stringFormatter(
          results.target.name.toUpperCase(),
          "-"
        )}`,
        details_flag
      );
    if (categoryName === "heal")
      return renderOneLineStat(`Heal: +${results.meta.healing}`, details_flag);
    if (categoryName === "damage+heal")
      return renderDamageandHeal(results, details_flag, results.target.name);
    if (categoryName === "ohko")
      return renderOneLineStat("ONE HIT K.O.", details_flag);
    if (categoryName === "swagger")
      return renderShortStats(results, details_flag);
    if (categoryName === "force-switch")
      return renderOneLineStat("FORCE SWITCH", details_flag);

    return <MovesStatsContainer />;
  };

  const renderMovesCard = () => {
    if (error) return null;
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
