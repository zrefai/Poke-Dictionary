import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./detailsMoveListStyles";
import { commonStyles } from "../../../styles/styleConfig";
import uuid from "../../../utils/uuid";
import stringFormatter from "../../../utils/stringFormatter";

const DetailsMovesContainer = styled(View)`mt5 mh6`;
const DetailsMovesListCell = styled(View, styles.detailsMoveListCell)``;
const DetailsMovesListButton = styled(
  TouchableOpacity,
  styles.detailsMovesMoreButton
)``;
const DetailsMovesListButtonText = styled(
  Text,
  styles.detailsMovesMoreButtonText
)``;
const DetailsMovesListContainer = styled(
  View,
  styles.detailsMovesListColumnContainer
)``;
const DetailsMovesListCellText = styled(
  Text,
  styles.detailsMovesListCellText
)``;
const DetailsMovesHeaderText = styled(
  Text,
  commonStyles.detailsHeaderTitleText
)``;

const DetailsMovesList = ({ movesList }) => {
  const moveNameList = movesList.map((item) => {
    return stringFormatter(item.move.name);
  });

  const renderMoveCell = (key, moveName) => {
    return (
      <DetailsMovesListCell key={key}>
        <DetailsMovesListCellText>{moveName}</DetailsMovesListCellText>
      </DetailsMovesListCell>
    );
  };

  return (
    <DetailsMovesContainer>
      <DetailsMovesHeaderText>Moves List: </DetailsMovesHeaderText>
      <DetailsMovesListContainer>
        {moveNameList.length > 5 ? (
          moveNameList.slice(0, 5).map((item) => {
            return renderMoveCell(uuid(), item);
          })
        ) : (
          <Text> Not enough moves </Text>
        )}
      </DetailsMovesListContainer>
      {/* TODO: fix this to navigate to fleshed out moves page */}
      <DetailsMovesListButton
        onPress={() => console.log("Does nothing...for now")}
      >
        <DetailsMovesListButtonText>SEE ALL</DetailsMovesListButtonText>
      </DetailsMovesListButton>
    </DetailsMovesContainer>
  );
};

export default DetailsMovesList;
