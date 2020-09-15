import React, { useState } from "react";
import {
  View,
  Text,
  Settings,
  SafeAreaView,
  Switch,
  Button,
  Alert,
} from "react-native";
import { styled } from "@shipt/react-native-tachyons";
import { normalizeFont } from "../styles/styleConfig";
import AsyncStorage from "@react-native-community/async-storage";

const SettingsCellDescriptionText = styled(Text)`tj pv1 ph2`;
const SettingsCellButton = styled(Button)`aic`;
const SettingsCellColumnContainer = styled(View, {
  flexDirection: "column",
  backgroundColor: "white",
})`wp100 pa3 mb3`;
const SettingsCellRowContainer = styled(View, {
  backgroundColor: "white",
  flexWrap: "wrap",
})`wp100 pa3 mb3 flx-row`;
const SettingsCellHeaderText = styled(Text, {
  fontSize: normalizeFont(15),
})`bold`;
const SettingsCellUnownModeContainer = styled(View, {
  flex: 1,
  flexDirection: "column",
})``;

const SettingsScreen = () => {
  const [unownMode, setUnownMode] = useState(
    Settings.get("@SETTINGS_UNOWN_MODE")
  );

  const onUnownModeChange = () => {
    Settings.set({ "@SETTINGS_UNOWN_MODE": !unownMode });
    setUnownMode(!unownMode);
  };

  const asyncAlert = () =>
    Alert.alert(
      "Warning",
      "Your about to clear the saved data for the Pokemon Dictionary. Are you sure you want to do this?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Canceled Async clear"),
          style: "cancel",
        },
        { text: "OK", onPress: () => asyncClear() },
      ],
      { cancelable: false }
    );

  const asyncClear = () => {
    console.log("Async memory CLEARED");
    AsyncStorage.clear();
  };

  const renderAsyncClearCell = () => {
    return (
      <SettingsCellColumnContainer>
        <SettingsCellHeaderText>Clear Saved Data:</SettingsCellHeaderText>
        <SettingsCellDescriptionText>
          Erase all saved data on pokemon, pokemon types, and pokemon moves.
          This will also erase the data saved for your favorites list. Only do
          this if you ever experience problems with the Pokemon Dictionary or
          want to free up memory on your personal device. Internet connection is
          required after clearing memory for furhter use of the Pokemon
          Dictionary.
        </SettingsCellDescriptionText>
        <SettingsCellButton
          onPress={() => asyncAlert()}
          title="Erase Pokemon Data"
        />
      </SettingsCellColumnContainer>
    );
  };

  const renderUnownMode = () => {
    return (
      <SettingsCellRowContainer>
        <SettingsCellUnownModeContainer>
          <SettingsCellHeaderText>Unown Mode:</SettingsCellHeaderText>
          <SettingsCellDescriptionText>
            Turn all applicable text into Unown Text
          </SettingsCellDescriptionText>
        </SettingsCellUnownModeContainer>
        <Switch
          style={{ alignSelf: "center", marginHorizontal: 10 }}
          trackColor={{ false: "red", true: "#18e73a" }}
          onValueChange={() => onUnownModeChange()}
          value={unownMode ? true : false}
        />
      </SettingsCellRowContainer>
    );
  };

  return (
    <SafeAreaView>
      {renderAsyncClearCell()}
      {renderUnownMode()}
    </SafeAreaView>
  );
};

export default SettingsScreen;
