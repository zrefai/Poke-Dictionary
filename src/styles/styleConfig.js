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

export const normalizeFont = (size) => {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

export const regularText = (size, pt = 3, others = {}, isUnown = false) => {
  return {
    fontFamily: isUnown ? "Unown" : "Pokemon_GB",
    fontSize: normalizeFont(size),
    paddingTop: pt,
    textAlign: "center",
    ...others,
  };
};

export const stackScreenNormalOptions = (route, isUnown = false) => {
  return {
    title: route.params.name,
    headerStyle: commonStyles.headerStyle,
    headerTitleStyle: regularText(9, 5, {}, isUnown),
    headerBackTitleStyle: regularText(9, 5, {}, isUnown),
    headerBackTitle: isUnown ? "back" : "Back",
  };
};

export const lowerCaseFormat = (val, isUnown) =>
  isUnown ? val.toLowerCase() : val;

const headerStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};

const PokemonGB = {
  paddingTop: 5,
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(10),
};

const detailsHeaderTitleText = {
  fontFamily: "Pokemon_GB",
  fontSize: normalizeFont(15),
  paddingTop: 5,
};

export const commonStyles = StyleSheet.create({
  PokemonGB,
  headerStyle,
  detailsHeaderTitleText,
});
