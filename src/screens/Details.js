import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import DetailsImages from "../components/pokemon-details/DetailsImages";
import PokemonType from "../components/pokemon-type/PokemonType";
import DetailsInfo from "../components/pokemon-details/details-info/DetailsInfo";

const DetailTypesContainer = styled(View)`flx-i flx-row jcc mv2`;

const Details = ({ navigation, route }) => {
  const { details } = route.params;

  const info_params = [
    {
      ID: details.id,
      "BASE XP": details.base_experience,
    },
    { HEIGHT: details.height, WEIGHT: details.weight },
  ];

  const stats_params = [
    {
      HP: details.stats[0].base_stat,
      SPD: details.stats[5].base_stat,
    },
    {
      ATK: details.stats[1].base_stat,
      "S-ATK": details.stats[3].base_stat,
    },
    {
      DEF: details.stats[2].base_stat,
      "S-DEF": details.stats[4].base_stat,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <DetailsImages images={details.sprites} />
        <DetailTypesContainer>
          <PokemonType types={details.types} details_flag={1} />
        </DetailTypesContainer>
        <DetailsInfo header={"Info:"} params={info_params} />
        <DetailsInfo header={"Stats:"} params={stats_params} />
      </ScrollView>
    </View>
  );
};

export default Details;
