import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import fontReducer from "../reducers/fontReducer";
import favoritesReducer from "../reducers/favoritesReducer";

const rootReducer = combineReducers({
  font: fontReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["font", "favorites"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  return createStore(rootReducer);
};

export const store = createStore(persistedReducer);
//createStore(persistedReducer, applyMiddleware)

export let persistor = persistStore(store);
