import React from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { commonStyles, regularText } from "../../styles/styleConfig";
import StyledText from "../../styles/TextStyle";
import uuid from "../../utils/uuid";

const DetailsInfoContainer = styled(View)`mt5 mh6`;
const DetailsInfoCellsContainer = styled(View)`flx-row ma1`;
const DetailInfoCell = styled(View, { borderRadius: 5, borderWidth: 2 })`mh1`;
const DetailInfoCellText = styled(
  Text,
  regularText(11, 5, { paddingBottom: 1, paddingHorizontal: 5 })
)``;
const DetailsInfoColumnContainer = styled(View, {
  flexDirection: "column",
})`mt4 aic`;

const DetailsInfo = ({ header, params }) => {
  return (
    <DetailsInfoContainer>
      <StyledText size={15} padtop={5} options={{ textAlign: "left" }}>
        {header}
      </StyledText>
      <DetailsInfoColumnContainer>
        {params.map((item) => {
          const keys = Object.keys(item);
          const values = Object.values(item);
          return (
            <DetailsInfoCellsContainer key={uuid()}>
              <DetailInfoCell>
                <DetailInfoCellText>{`${keys[0]}: ${values[0]}`}</DetailInfoCellText>
              </DetailInfoCell>
              <DetailInfoCell>
                <DetailInfoCellText>{`${keys[1]}: ${values[1]}`}</DetailInfoCellText>
              </DetailInfoCell>
            </DetailsInfoCellsContainer>
          );
        })}
      </DetailsInfoColumnContainer>
    </DetailsInfoContainer>
  );
};

export default DetailsInfo;
