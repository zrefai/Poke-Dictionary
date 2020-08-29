import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import SearchBar from "../components/SearchBar";

const SearchContainer = styled(View)`flx-i bg-white aic`;

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <SearchContainer>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => console.log(term)}
      />
    </SearchContainer>
  );
};

export default Search;
