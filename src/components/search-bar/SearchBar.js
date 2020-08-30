import React from "react";
import { View, TextInput } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./searchBarStyles";
import { Feather } from "@expo/vector-icons";

const SearchBarContainer = styled(View, styles.backgroundStyle)``;

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <SearchBarContainer>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        style={styles.inputStyle}
        value={term}
        placeholder="..."
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
