import { createStore, combineReducers } from "redux";
import fontReducer from "../reducers/fontReducer";

const rootReducer = combineReducers({ font: fontReducer });

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
