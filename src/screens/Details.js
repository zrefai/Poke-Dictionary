import React from "react";
import { View, Text, ScrollView } from "react-native";
import DetailsImages from "../components/pokemon-details/details-images/DetailsImages";

const Details = ({ navigation, route }) => {
  const { details } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <DetailsImages images={details.sprites} />
      </ScrollView>
    </View>
  );
};

export default Details;
