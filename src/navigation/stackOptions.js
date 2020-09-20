import React from "react";
import { commonStyles, regularText } from "../styles/styleConfig";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import capitalize from "../utils/capitalize";
import stringFormatter from "../utils/stringFormatter";
import FavoritesButton from "../components/favorites/FavoritesDetailsButton";

export const stackScreenNormalOptions = (route, isUnown = false) => {
  return {
    title: stringFormatter(route.params.name, "-", isUnown),
    headerStyle: commonStyles.headerStyle,
    headerTitleStyle: regularText(9, 5, {}, isUnown),
    headerBackTitleStyle: regularText(9, 5, {}, isUnown),
    headerBackTitle: capitalize("back", isUnown),
    // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  };
};

export const stackScreenFavoriteOptions = (route, isUnown = false) => {
  return {
    title: stringFormatter(route.params.name, "-", isUnown),
    headerStyle: commonStyles.headerStyle,
    headerTitleStyle: regularText(9, 5, {}, isUnown),
    headerBackTitleStyle: regularText(9, 5, {}, isUnown),
    headerBackTitle: capitalize("back", isUnown),
    headerRight: () => (
      <FavoritesButton
        name={route.params.details.name}
        id={route.params.details.id}
      />
    ),
  };
};
