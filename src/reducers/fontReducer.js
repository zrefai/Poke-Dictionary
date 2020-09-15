import { CHANGE_TO_UNOWN } from "../constants";

const initialState = {
  isUnown: false,
};

const fontReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TO_UNOWN:
      return {
        isUnown: !state.isUnown,
      };

    default:
      return state;
  }
};

export default fontReducer;
