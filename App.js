import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "./src/screens/Search";

export default function App() {
  const Stack = createStackNavigator();
  const [loaded] = useFonts({
    Pokemon_GB: require("./assets/fonts/PokemonGb-RAeo.ttf"),
    Unown: require("./assets/fonts/PokemonUnownGb-YAWa.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: "Pokemon Search",
            headerTitleStyle: styles.headerStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontFamily: "Pokemon_GB",
    paddingTop: 5,
    fontSize: 12,
  },
});
