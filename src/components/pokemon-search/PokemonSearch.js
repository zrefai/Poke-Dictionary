import React, { useState } from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { regularText } from "../../styles/styleConfig";
import { useSelector } from "react-redux";
import { unown } from "../../redux/selectors/index.js";
import Fuse from "fuse.js";
import SearchBar from "../search-bar/SearchBar";
import PokemonList from "../pokemon-list/PokemonList";

const SearchContainer = styled(View)`flx-i bg-white`;
const NothingHereContainer = styled(View, {
  alignContent: "center",
})`asc mt7 ma6`;

const PokemonSearch = ({ pokemonList }) => {
  const [term, setTerm] = useState("");
  const [index, setIndex] = useState(20);
  const [pokeList, setPokeList] = useState(pokemonList.slice(0, index));
  const [searchError, setSearchError] = useState(false);
  const [searching, setSearching] = useState(false);
  const isUnown = useSelector(unown);

  const NothingHereText = styled(
    Text,
    regularText(10, 2, { color: "#898989" }, isUnown)
  )`pt1 lh-solid `;

  const [searchFilterResults, setSearchFilterResults] = useState(
    pokemonList.slice(0, index)
  );

  const searchFilter = (newTerm) => {
    if (newTerm.length === 0) setSearching(false);
    else searching ? null : setSearching(true);

    //Reset searchError on new search during filter
    searchError ? setSearchError(false) : null;
    setTerm(newTerm);

    if (newTerm.length <= 1) {
      const newSearchResults = searchFilterResults.filter((item) => {
        const name = `${item.name.toLowerCase()}`;
        const searchTerm = newTerm.toLowerCase();

        return name.indexOf(searchTerm) > -1;
      });

      //If new search results yields from currently loaded list
      if (newSearchResults) setPokeList(newSearchResults);
    } else {
      newTerm = newTerm.replace(/^\s+|\s+$/gm, "").toLowerCase();

      const options = {
        shouldSort: true,
        threshold: 0.25,
        keys: ["name"],
      };

      const fuse = new Fuse(pokemonList, options);
      const fuseFilterResults = fuse.search(newTerm);

      if (fuseFilterResults.length) {
        const newFilterResults = fuseFilterResults.reduce((acc, curr) => {
          const entry = { name: curr.item.name, url: curr.item.url };
          return acc.concat(entry);
        }, []);
        setPokeList(newFilterResults);
      } else {
        setSearchError(true);
      }
    }
  };

  const loadMorePokemon = () => {
    const newIndex = index + 20;
    let newResultsList = searchFilterResults;
    //Hit upper bound or limit, dont generate more to list
    if (newIndex >= pokemonList.length) return;

    for (let i = index + 1; i < newIndex; ++i) {
      newResultsList.push(pokemonList[i]);
    }

    setIndex(newIndex);
    setPokeList(newResultsList);
    setSearchFilterResults(newResultsList);
  };

  return (
    <SearchContainer>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => searchFilter(newTerm)}
      />
      {searchError ? (
        <NothingHereContainer>
          <NothingHereText>Pokemon does not exist.</NothingHereText>
          <NothingHereText>Please try again.</NothingHereText>
        </NothingHereContainer>
      ) : (
        <PokemonList
          pokemonList={pokeList}
          searching={searching}
          onLoadMore={loadMorePokemon}
        />
      )}
    </SearchContainer>
  );
};

export default PokemonSearch;
