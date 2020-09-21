import "react-native-gesture-handler";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store/configureStore";
import MainStack from "./src/navigation/MainStack";
import { StatusBar } from "expo-status-bar";
import { cacheImages } from "./src/utils/cacheImages";
import { cacheFonts } from "./src/utils/cacheFonts";

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require("./assets/images/Placeholder.png"),
    ]);
    const fontAssets = cacheFonts([
      { Pokemon_GB: require("./assets/fonts/PokemonGb-RAeo.ttf") },
      { Unown: require("./assets/fonts/PokemonUnownGb-YAWa.ttf") },
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
