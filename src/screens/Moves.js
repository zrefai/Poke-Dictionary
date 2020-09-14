import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import MoveCard from "../components/pokemon-move/MoveCard";
import uuid from "../utils/uuid";

const Moves = ({ route }) => {
  const { moves } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, width: "100%", marginTop: 5 }}>
        {moves.map((move) => (
          <MoveCard key={uuid()} name={move.move.name} url={move.move.url} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Moves;
