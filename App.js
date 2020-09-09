import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { commonStyles } from "./src/styles/styleConfig";
import Search from "./src/screens/Search";
import Details from "./src/screens/Details";

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
            headerStyle: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            },
            headerTitleStyle: commonStyles.headerTitleText,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
            },
            headerTitleStyle: commonStyles.headerTitleText,
            headerBackTitle: "Back",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
