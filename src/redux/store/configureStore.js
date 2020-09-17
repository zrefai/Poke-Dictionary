import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import fontReducer from "../reducers/fontReducer";

const rootReducer = combineReducers({ font: fontReducer });

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["font"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  return createStore(rootReducer);
};

export const store = createStore(persistedReducer);
//createStore(persistedReducer, applyMiddleware)

export let persistor = persistStore(store);
