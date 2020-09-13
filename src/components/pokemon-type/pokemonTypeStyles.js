import { StyleSheet } from "react-native";
import { normalizeFont, normalizeUIW } from "../../styles/styleConfig";

const typeContainerColumn = {
  flexDirection: "column",
};

const typeContainerRow = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

const typeBackground = {
  borderRadius: 5,
  borderWidth: 2,
  minWidth: normalizeUIW(20),
  margin: 1,
};

const typeBackgroundDamage = {
  borderRadius: 5,
  borderWidth: 2,
  minWidth: normalizeUIW(18),
  margin: 1,
};

const typeTextCard = {
  alignSelf: "center",
  fontFamily: "Pokemon_GB",
  color: "white",
  paddingHorizontal: 5,
  paddingTop: 4,
  fontSize: normalizeFont(8.5),
};

const typeTextDetails = {
  alignSelf: "center",
  fontFamily: "Pokemon_GB",
  color: "white",
  paddingHorizontal: 5,
  paddingTop: 4,
};

const typeTextDamage = {
  alignSelf: "center",
  fontFamily: "Pokemon_GB",
  color: "white",
  paddingTop: 4,
  paddingBottom: 1,
  fontSize: normalizeFont(7),
};

export const styles = StyleSheet.create({
  typeContainerColumn,
  typeContainerRow,
  typeBackground,
  typeTextCard,
  typeTextDetails,
  typeTextDamage,
  typeBackgroundDamage,
});
