import React from "react";
import { View, Text } from "react-native";
import { normalizeFont, normalizeUIW } from "../../../styles/styleConfig";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./detailsInfoStyles";

const DetailsInfoContainer = styled(View)`mt5 mh6`;
const DetailsHeaderText = styled(Text, styles.detailsheaderText)``;
const DetailsInfoColumnContainer = styled(
  View,
  styles.detailsInfoColumnContainer
)`aic`;
const DetailsInfoCellsContainer = styled(View)`flx-row ma1`;
const DetailInfoCell = styled(View, styles.detailsInfoCell)``;
const DetailInfoCellText = styled(Text, styles.detailsInfoCellText)``;

const DetailsInfo = ({ header, params }) => {
  return (
    <DetailsInfoContainer>
      <DetailsHeaderText>{header}</DetailsHeaderText>
      <DetailsInfoColumnContainer>
        {params.map((item) => {
          const keys = Object.keys(item);
          const values = Object.values(item);
          return (
            <DetailsInfoCellsContainer>
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
