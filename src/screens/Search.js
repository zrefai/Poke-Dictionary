import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { commonStyles } from "../styles/styleConfig";

const TextContainer = styled(Text, commonStyles.PokemonGB)`pt2`;

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.container}>
      <TextContainer>Hello</TextContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Search;
