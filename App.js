import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { build } from "@shipt/react-native-tachyons";
import { tachyonStyles } from "./src/styles/styleConfig";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store/configureStore";
import SearchStack from "./src/navigation/SearchStack";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [loaded] = useFonts({
    Pokemon_GB: require("./assets/fonts/PokemonGb-RAeo.ttf"),
    Unown: require("./assets/fonts/PokemonUnownGb-YAWa.ttf"),
  });

  build({ tachyonStyles });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <SearchStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
