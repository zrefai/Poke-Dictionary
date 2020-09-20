import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styled } from "@shipt/react-native-tachyons";
import { normalizeUIW } from "../../styles/styleConfig";
import { useDispatch, useSelector } from "react-redux";
import { favorites } from "../../redux/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/favorites";

const FavoritesButtonContainer = styled(TouchableOpacity)`mt1 mr3`;

export default function FavoritesButton({ name, id }) {
  //TODO: check to make sure that entries like MEGA are pulling up the same thing, and that their ID's are mismatched
  const dispatch = useDispatch();
  const favoritesList = useSelector(favorites);
  const [buttonState, setButtonState] = useState(
    favoritesList.some((item) => item.id === id)
  );

  const onPress = () => {
    if (buttonState) {
      let index = -1;
      for (let i = 0; i < favoritesList.length; ++i) {
        if (favoritesList[i].id === id) {
          index = i;
        }
      }
      dispatch(removeFromFavorites(index));
      setButtonState(false);
    } else {
      dispatch(addToFavorites(name, id));
      setButtonState(true);
    }
  };

  return (
    <FavoritesButtonContainer onPress={() => onPress()}>
      <MaterialIcons
        name={buttonState ? "favorite" : "favorite-border"}
        size={normalizeUIW(7.5)}
        color={"#ce3b60"}
      />
    </FavoritesButtonContainer>
  );
}
