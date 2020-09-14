import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { normalizeUIW } from "../../styles/styleConfig";
import { styled } from "@shipt/react-native-tachyons";

const SettingsButtonContainer = styled(TouchableOpacity)`mt1 ml3`;

export default function SettingsButton() {
  const navigation = useNavigation();
  return (
    <SettingsButtonContainer onPress={() => navigation.navigate("Settings")}>
      <AntDesign name="setting" size={normalizeUIW(7.5)} color={"black"} />
    </SettingsButtonContainer>
  );
}
