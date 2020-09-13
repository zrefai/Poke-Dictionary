import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./detailsMoveListStyles";
import { commonStyles, regularText } from "../../../styles/styleConfig";
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
  regularText(9, 7, { color: "white", paddingHorizontal: 6, paddingBottom: 3 })
)``;
const DetailsMovesListContainer = styled(View, {
  flexDirection: "column",
})`mt4 aic`;
const DetailsMovesListCellText = styled(
  Text,
  regularText(11, 5, { paddingBottom: 1 })
)`mv1`;
const DetailsMovesHeaderText = styled(
  Text,
  commonStyles.detailsHeaderTitleText
)``;

const DetailsMovesList = ({ movesList }) => {
  const moveNameList = movesList.map((item) => {
    return stringFormatter(item.move.name, "-");
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
