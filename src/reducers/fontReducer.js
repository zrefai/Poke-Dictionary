import { CHANGE_TO_UNOWN } from "../constants";

const initialState = {
  isUnown: false,
};

const fontReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TO_UNOWN:
      return {
        //May not need this spread
        ...state,
        //May not need to flip either
        isUnown: !action.payload,
      };

    default:
      return state;
  }
};

export default fontReducer;
