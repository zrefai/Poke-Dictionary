import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import {
  commonStyles,
  stackScreenNormalOptions,
  regularText,
} from "../styles/styleConfig";
import { useSelector } from "react-redux";
import { unown } from "../selectors";
import Search from "../screens/Search";
import Details from "../screens/Details";
import Moves from "../screens/Moves";
import Settings from "../screens/Settings";
import SettingsButton from "../components/settings/SettingsButton";

const SearchStack = () => {
  const isUnown = useSelector(unown);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: isUnown ? "pokemon search" : "Pokemon Search",
            headerStyle: commonStyles.headerStyle,
            headerTitleStyle: regularText(9, 5, {}, isUnown),
            headerLeft: () => <SettingsButton />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => stackScreenNormalOptions(route, isUnown)}
        />
        <Stack.Screen
          name="Moves"
          component={Moves}
          options={({ route }) => stackScreenNormalOptions(route, isUnown)}
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
