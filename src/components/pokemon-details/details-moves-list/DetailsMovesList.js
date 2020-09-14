import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./detailsMovesListStyles";
import { commonStyles, regularText } from "../../../styles/styleConfig";
import { useNavigation } from "@react-navigation/native";
import uuid from "../../../utils/uuid";
import stringFormatter from "../../../utils/stringFormatter";
import MoveCard from "../../pokemon-move/MoveCard";

const DetailsMovesContainer = styled(View)`mt5 mh6`;
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
const DetailsMovesHeaderText = styled(
  Text,
  commonStyles.detailsHeaderTitleText
)``;

const DetailsMovesList = ({ name, movesList }) => {
  const navigation = useNavigation();
  const movesNameList = movesList.map((item) => {
    return { name: stringFormatter(item.move.name, "-"), url: item.move.url };
  });

  return (
    <DetailsMovesContainer>
      <DetailsMovesHeaderText>Moves List: </DetailsMovesHeaderText>
      <DetailsMovesListContainer>
        {movesNameList.slice(0, 5).map((item) => {
          return (
            <MoveCard
              key={uuid()}
              name={item.name}
              url={item.url}
              details_flag={1}
            />
          );
        })}
      </DetailsMovesListContainer>
      {/* TODO: fix this to navigate to fleshed out moves page */}
      <DetailsMovesListButton
        onPress={() =>
          navigation.navigate("Moves", {
            name: `${name}'s Moves`,
            moves: movesList,
          })
        }
      >
        <DetailsMovesListButtonText>SEE ALL</DetailsMovesListButtonText>
      </DetailsMovesListButton>
    </DetailsMovesContainer>
  );
};

export default DetailsMovesList;
