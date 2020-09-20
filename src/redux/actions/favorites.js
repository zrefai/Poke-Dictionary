import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../constants";

export function addToFavorites(name, id) {
  return {
    type: ADD_TO_FAVORITES,
    payload: { name: name, id: id },
  };
}

export function removeFromFavorites(index) {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: index,
  };
}
