import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../constants";

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];

    case REMOVE_FROM_FAVORITES:
      return state.filter((item, index) => index != action.payload);

    default:
      return state;
  }
};

export default favoritesReducer;
