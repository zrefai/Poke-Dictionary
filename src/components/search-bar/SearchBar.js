import React from "react";
import { View, TextInput } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { styles } from "./searchBarStyles";
import { Feather } from "@expo/vector-icons";
import { regularText } from "../../styles/styleConfig";

const SearchBarContainer = styled(View, styles.backgroundStyle)``;

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <SearchBarContainer>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        style={regularText(13, 5, { flex: 1, textAlign: "left" })}
        value={term}
        placeholder="..."
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
