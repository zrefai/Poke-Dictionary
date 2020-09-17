import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import SearchStack from "./src/navigation/SearchStack";
import configureStore from "./src/redux/store/configureStore";

export default function App() {
  const store = configureStore();
  const [loaded] = useFonts({
    Pokemon_GB: require("./assets/fonts/PokemonGb-RAeo.ttf"),
    Unown: require("./assets/fonts/PokemonUnownGb-YAWa.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <SearchStack />
    </Provider>
  );
}
