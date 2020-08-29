import { Dimensions, PixelRatio, StyleSheet } from "react-native";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

const scale = deviceWidth / 320;

// Percent is multiplied by 100
export const normalizeUIW = (percent) => {
  return (deviceWidth * percent) / 100;
};

export const normalizeUIH = (percent) => {
  return (deviceHeight * percent) / 100;
};

export const noramlizeFont = (size) => {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

const headerTitleText = {
  fontFamily: "Pokemon_GB",
  paddingTop: 5,
  fontSize: noramlizeFont(9),
};

const PokemonGB = {
  fontFamily: "Pokemon_GB",
  fontSize: noramlizeFont(10),
};

export const commonStyles = StyleSheet.create({
  PokemonGB,
  headerTitleText,
});
