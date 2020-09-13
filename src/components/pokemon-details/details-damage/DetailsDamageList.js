import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { commonStyles } from "../../../styles/styleConfig";
import { styles } from "./detailsDamageListStyles";
import { styled } from "@shipt/react-native-tachyons";
import uuid from "../../../utils/uuid";
import stringFormatter from "../../../utils/stringFormatter";
import useTypeSearch from "../../../hooks/useTypeSearch";
import PokemonType from "../../pokemon-type/PokemonType";

const DetailsDamageListCellContainer = styled(View)`flx-i aic jcc flx-row mv3`;
const DetailsDamageCellContainer = styled(View)`flx-i aic wp45 jcc`;
const DetailsDamageInfoText = styled(Text, styles.infoText)`lh-solid`;
const DetailsDamageNothingText = styled(Text, styles.nothingText)``;
const DetailsDamageContainer = styled(View, {
  flexDirection: "column",
})`mt5 mh6`;
const DetailsDamageListHeaderText = styled(
  Text,
  commonStyles.detailsHeaderTitleText
)``;

const damageKeys = [
  "double_damage_from",
  "half_damage_from",
  "no_damage_from",
  "double_damage_to",
  "half_damage_to",
  "no_damage_to",
];

const DetailsDamageList = ({ typeList }) => {
  const [fetchTypeResults, results, error] = useTypeSearch(
    typeList.map((item) => item.type.url)
  );

  // console.log(results);
  const processDamageData = () => {
    return results.reduce((acc, o) => {
      Object.keys(o).forEach((key) => {
        if (Array.isArray(o[key])) {
          const match = acc.get(key),
            items = o[key].map(({ name }) => name);
          match
            ? match.push(
                ...items.filter((item) => {
                  if (match.indexOf(item) === -1) return item;
                })
              )
            : acc.set(key, items);
        }
      });
      return acc;
    }, new Map());
  };

  const renderNothing = () => {
    return (
      <DetailsDamageCellContainer>
        <DetailsDamageNothingText>Nothing</DetailsDamageNothingText>
      </DetailsDamageCellContainer>
    );
  };

  const renderDamageInfo = (infoText) => {
    return (
      <DetailsDamageCellContainer>
        <DetailsDamageInfoText>
          {stringFormatter(infoText, "_")}
        </DetailsDamageInfoText>
      </DetailsDamageCellContainer>
    );
  };

  const renderDamageType = (typeList) => {
    return (
      <DetailsDamageCellContainer>
        <PokemonType types={typeList} damage_flag={1} />
      </DetailsDamageCellContainer>
    );
  };

  const renderDamageList = () => {
    if (results.length > 0) {
      const damageMap = processDamageData();

      return damageKeys.map((damageKey) => {
        return (
          <DetailsDamageListCellContainer key={uuid()}>
            {renderDamageInfo(damageKey)}
            {damageMap.get(damageKey).length > 0
              ? renderDamageType(damageMap.get(damageKey))
              : renderNothing()}
          </DetailsDamageListCellContainer>
        );
      });
    }
    return null;
  };

  return (
    <DetailsDamageContainer>
      <DetailsDamageListHeaderText>Damage Stats:</DetailsDamageListHeaderText>
      {renderDamageList()}
    </DetailsDamageContainer>
  );
};

export default DetailsDamageList;
