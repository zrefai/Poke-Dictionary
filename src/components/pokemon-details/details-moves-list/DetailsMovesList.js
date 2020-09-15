import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { styles } from "./detailsMovesListStyles";
import {
  commonStyles,
  regularText,
  lowerCaseFormat,
} from "../../../styles/styleConfig";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { unown } from "../../../selectors";
import uuid from "../../../utils/uuid";
import stringFormatter from "../../../utils/stringFormatter";
import MoveCard from "../../pokemon-move/MoveCard";
import StyledText from "../../../styles/TextStyle";

const DetailsMovesContainer = styled(View)`mt5 mh6`;
const DetailsMovesListButton = styled(
  TouchableOpacity,
  styles.detailsMovesMoreButton
)``;
const DetailsMovesListContainer = styled(View, {
  flexDirection: "column",
})`mt4 aic`;

const DetailsMovesList = ({ name, movesList }) => {
  const isUnown = useSelector(unown);
  const navigation = useNavigation();
  const headerTitle = `${name}'s Moves`;
  const movesNameList = movesList.map((item) => {
    return { name: stringFormatter(item.move.name, "-"), url: item.move.url };
  });

  return (
    <DetailsMovesContainer>
      <StyledText size={15} padtop={5} options={{ textAlign: "left" }}>
        Moves List:
      </StyledText>
      <DetailsMovesListContainer>
        {movesNameList.slice(0, 3).map((item) => {
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
      <DetailsMovesListButton
        onPress={() =>
          navigation.navigate("Moves", {
            name: isUnown ? headerTitle.toLowerCase() : headerTitle,
            moves: movesList,
          })
        }
      >
        <StyledText
          size={9}
          padtop={6}
          options={{ color: "white", paddingBottom: 2, paddingHorizontal: 4 }}
        >
          SEE ALL
        </StyledText>
      </DetailsMovesListButton>
    </DetailsMovesContainer>
  );
};

export default DetailsMovesList;
