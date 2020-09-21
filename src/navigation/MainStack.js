import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { commonStyles, regularText } from "../styles/styleConfig";
import {
  stackScreenNormalOptions,
  stackScreenFavoriteOptions,
} from "./stackOptions";
import { useSelector } from "react-redux";
import { unown } from "../redux/selectors";
import Search from "../screens/Search";
import Details from "../screens/Details";
import Moves from "../screens/Moves";
import Settings from "../screens/Settings";
import SettingsButton from "../components/settings/SettingsButton";
import FavoritesButton from "../components/favorites/FavoritesButton";
import FavoritesStack from "./FavoritesStack";

const MainStack = () => {
  const isUnown = useSelector(unown);
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: isUnown ? "poke search" : "Poke Search",
          headerStyle: commonStyles.headerStyle,
          headerTitleStyle: regularText(9, 5, {}, isUnown),
          headerLeft: () => <SettingsButton />,
          headerRight: () => (
            <FavoritesButton type={"star"} action={"Navigation"} />
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => stackScreenFavoriteOptions(route, isUnown)}
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
      <Stack.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
