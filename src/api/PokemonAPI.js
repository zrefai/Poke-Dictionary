import axios from "axios";

export const pokemonURL = "https://pokeapi.co/api/v2/";

export const instance = axios.create({
  baseURL: pokemonURL,
});
