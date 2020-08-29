import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Pokemon_GB",
          paddingTop: 7,
        }}
      >
        Hello
      </Text>
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
