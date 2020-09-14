import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import DetailsImages from "../components/pokemon-details/DetailsImages";
import PokemonType from "../components/pokemon-type/PokemonType";
import DetailsInfo from "../components/pokemon-details/DetailsInfo";
import DetailsEvolution from "../components/pokemon-details/details-evolution/DetailsEvolution";
import DetailsMovesList from "../components/pokemon-details/details-moves-list/DetailsMovesList";
import DetailsDamageList from "../components/pokemon-details/DetailsDamageList";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          <DetailsImages images={details.sprites} />
          <DetailTypesContainer>
            <PokemonType types={details.types} details_flag={1} />
          </DetailTypesContainer>
          <DetailsInfo header={"Info:"} params={info_params} />
          <DetailsInfo header={"Stats:"} params={stats_params} />
          <DetailsMovesList movesList={details.moves} />
          <DetailsEvolution id={details.id} />
          <DetailsDamageList typeList={details.types} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;
