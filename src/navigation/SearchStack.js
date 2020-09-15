import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { commonStyles, stackScreenNormalOptions } from "../styles/styleConfig";
import Search from "../screens/Search";
import Details from "../screens/Details";
import Moves from "../screens/Moves";
import Settings from "../screens/Settings";
import SettingsButton from "../components/settings/SettingsButton";

const SearchStack = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: "Pokemon Search",
            headerStyle: commonStyles.headerStyle,
            headerTitleStyle: commonStyles.headerTitleText,
            headerLeft: () => <SettingsButton />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => stackScreenNormalOptions(route)}
        />
        <Stack.Screen
          name="Moves"
          component={Moves}
          options={({ route }) => stackScreenNormalOptions(route)}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "Settings",
            headerStyle: commonStyles.headerStyle,
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SearchStack;
