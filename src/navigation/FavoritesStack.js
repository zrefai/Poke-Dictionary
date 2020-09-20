import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { unown } from "../redux/selectors";
import {
  stackScreenFavoriteOptions,
  stackScreenNormalOptions,
} from "../navigation/stackOptions";
import Details from "../screens/Details";
import Favorites from "../screens/Favorites";
import Moves from "../screens/Moves";
import { commonStyles, regularText } from "../styles/styleConfig";
import capitalize from "../utils/capitalize";
// import { StackActions, useNavigation } from "@react-navigation/native";

const FavoritesStack = () => {
  const Stack = createStackNavigator();
  const isUnown = useSelector(unown);

  return (
    <Stack.Navigator initialRouteName="FavoritesHome">
      <Stack.Screen
        name="FavoritesHome"
        component={Favorites}
        options={{
          title: isUnown ? "favorites" : "Favorites",
          headerStyle: commonStyles.headerStyle,
          headerTitleStyle: regularText(9, 5, {}, isUnown),
          headerBackTitleStyle: regularText(9, 5, {}, isUnown),
          headerBackTitle: capitalize("search", isUnown),
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
    </Stack.Navigator>
  );
};

export default FavoritesStack;
