import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styled } from "@shipt/react-native-tachyons";
import { normalizeUIW } from "../../styles/styleConfig";

const FavoritesButtonContainer = styled(TouchableOpacity)`mt1 mr3`;

export default function FavoritesButton() {
  const navigation = useNavigation();

  return (
    <FavoritesButtonContainer onPress={() => navigation.navigate("Favorites")}>
      <MaterialIcons
        name={"favorite"}
        size={normalizeUIW(7.5)}
        color={"black"}
      />
    </FavoritesButtonContainer>
  );
}
