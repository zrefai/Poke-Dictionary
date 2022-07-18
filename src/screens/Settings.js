import React from "react";
import { View, Text, SafeAreaView, Switch, Button, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fontChange } from "../redux/actions/font";
import { styled } from "@shipt/react-native-tachyons";
import { normalizeFont } from "../styles/styleConfig";
import { unown } from "../redux/selectors";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const dispatch = useDispatch();
  const isUnown = useSelector(unown);

  const onUnownModeChange = () => {
    return dispatch(fontChange());
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
          Erase all saved data on character, types, and moves. This will also
          erase the data saved for your favorites list. Only do this if you ever
          experience problems with the Pokè Dictionary or want to free up memory
          on your personal device. Internet connection is required after
          clearing memory for further use of the Pokè Dictionary.
        </SettingsCellDescriptionText>
        <SettingsCellButton
          onPress={() => asyncAlert()}
          title="Erase Pokè Data"
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
            Everything is Unown!?
          </SettingsCellDescriptionText>
        </SettingsCellUnownModeContainer>
        <Switch
          style={{ alignSelf: "center", marginHorizontal: 10 }}
          trackColor={{ false: "red", true: "#18e73a" }}
          onValueChange={() => onUnownModeChange()}
          value={isUnown}
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
