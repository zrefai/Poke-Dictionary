import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "../styles/searchBarStyles";
import { Feather } from "@expo/vector-icons";

const SearchBarContainer = styled(View, styles.backgroundStyle)``;

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <SearchBarContainer>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
