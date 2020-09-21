import React from "react";
import {
  MovesStatsContainer,
  MoveStatCellText,
  MoveStatsCell,
} from "./moveCardStyle";
import stringFormatter from "../../utils/stringFormatter";

export const shortHandStats = {
  hp: "HP",
  attack: "ATK",
  "special-attack": "S-ATK",
  defense: "DEF",
  "special-defense": "S-DEF",
  speed: "SPD",
  accuracy: "ACC",
  evasion: "EVA",
};

const sizeDefault = (details_flag) => (details_flag ? 7 : 7.5);
const containerSizeDefault = (details_flag) => (details_flag ? null : 8);

export const renderShortStats = (results, details_flag, unique_flag = 0) => {
  const size = sizeDefault(details_flag);
  const containerSize = containerSizeDefault(details_flag);
  const textOptions = { textAlign: "left", marginRight: 2 };

  return (
    <MovesStatsContainer size={containerSize}>
      {renderUniqe(unique_flag, size)}
      <MoveStatsCell options={{ marginVertical: 4 }}>
        <MoveStatCellText
          size={size}
          options={textOptions}
        >{`PP: ${results.pp}`}</MoveStatCellText>
        <MoveStatCellText size={size} options={textOptions}>{`ACC: ${
          results.accuracy ? results.accuracy : "0"
        }`}</MoveStatCellText>
      </MoveStatsCell>
      <MoveStatsCell options={{ marginVertical: 4 }}>
        <MoveStatCellText size={size} options={textOptions}>{`PW: ${
          results.power ? results.power : "0"
        }`}</MoveStatCellText>
        <MoveStatCellText
          size={size}
          options={textOptions}
        >{`PR: ${results.priority}`}</MoveStatCellText>
      </MoveStatsCell>
    </MovesStatsContainer>
  );
};

const renderUniqe = (unique_flag, size) => {
  const textUniqueOptions = { textAlign: "center" };
  return unique_flag ? (
    <MoveStatsCell options={{ marginVertical: 4 }}>
      <MoveStatCellText size={size} options={textUniqueOptions}>
        UNIQUE
      </MoveStatCellText>
    </MoveStatsCell>
  ) : null;
};

const renderTarget = (size, textOptions, target) => {
  return (
    <MoveStatsCell options={{ marginVertical: 1.5 }}>
      <MoveStatCellText
        size={size}
        options={textOptions}
      >{`Target: ${stringFormatter(
        target.toUpperCase(),
        "-"
      )}`}</MoveStatCellText>
    </MoveStatsCell>
  );
};

export const renderNetStats = (results, details_flag, dmg = "") => {
  const size = sizeDefault(details_flag);
  const containerSize = containerSizeDefault(details_flag);
  const textOptions = { textAlign: "center", lineHeight: 16 };
  const statChanges = results.stat_changes[0];

  return (
    <MovesStatsContainer size={containerSize}>
      <MoveStatsCell options={{ marginVertical: 1.5 }}>
        <MoveStatCellText size={size} options={textOptions}>{`${
          dmg ? dmg : ""
        }${statChanges.change > 0 ? "+" : ""}${statChanges.change} ${
          shortHandStats[statChanges.stat.name]
        }`}</MoveStatCellText>
      </MoveStatsCell>
      {renderTarget(size, textOptions, results.target.name)}
    </MovesStatsContainer>
  );
};

export const renderAilment = (
  ailmentName,
  details_flag,
  ailment_flag,
  target
) => {
  const size = sizeDefault(details_flag);
  const containerSize = containerSizeDefault(details_flag);
  const textOptions = { textAlign: "center", lineHeight: 16 };
  const ailment = stringFormatter(ailmentName.toUpperCase(), "-");
  const topText = ailment_flag ? `Ailment: ${ailment}` : `${ailment} + DMG`;

  return (
    <MovesStatsContainer size={containerSize}>
      <MoveStatsCell options={{ marginVertical: 1.5 }}>
        <MoveStatCellText size={size} options={textOptions}>
          {topText}
        </MoveStatCellText>
      </MoveStatsCell>
      {renderTarget(size, textOptions, target)}
    </MovesStatsContainer>
  );
};

export const renderHeal = (results, details_flag) => {
  const size = sizeDefault(details_flag);
  const containerSize = containerSizeDefault(details_flag);
  const textOptions = { textAlign: "center" };

  return (
    <MovesStatsContainer size={containerSize}>
      <MoveStatsCell options={{ marginVertical: 1.5 }}>
        <MoveStatCellText size={size} options={textOptions}>
          {`Heal: +${results.meta.healing}`}
        </MoveStatCellText>
      </MoveStatsCell>
    </MovesStatsContainer>
  );
};

export const renderDamageandHeal = (results, details_flag, target) => {
  const size = sizeDefault(details_flag);
  const containerSize = containerSizeDefault(details_flag);
  const textOptions = { textAlign: "center", lineHeight: 16 };

  return (
    <MovesStatsContainer size={containerSize}>
      <MoveStatsCell options={{ marginVertical: 1.5 }}>
        <MoveStatCellText size={size} options={textOptions}>
          {`Drain: ${results.meta.drain}`}
        </MoveStatCellText>
      </MoveStatsCell>
      {renderTarget(size, textOptions, target)}
    </MovesStatsContainer>
  );
};

export const renderOneLineStat = (text, details_flag) => {
  const size = sizeDefault(details_flag);
  const containerSize = containerSizeDefault(details_flag);
  const textOptions = { textAlign: "center", lineHeight: 16 };

  return (
    <MovesStatsContainer size={containerSize}>
      <MoveStatsCell options={{ marginVertical: 1.5 }}>
        <MoveStatCellText size={size} options={textOptions}>
          {text}
        </MoveStatCellText>
      </MoveStatsCell>
    </MovesStatsContainer>
  );
};
