import React from "react";
import { View, Image } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import placeholder from "../../../assets/images/Placeholder.png";

const DetailsImagesContainer = styled(View)`flx-row jcc mv3`;
const DetailsImage = styled(Image)`wp40 ar-1`;
const DetailsIcon = styled(Image, { marginTop: -20 })`wp30 ar-1 rm-contain`;
const PlaceholderImage = styled(Image)` wp30 ar-1 rm-contain`;

const DetailsImages = ({ sprites }) => {
  const renderImages = (type) => {
    if (type === "front_default") {
      if (sprites.front_default)
        return <DetailsImage source={{ uri: sprites.front_default }} />;
      if (sprites.versions["generation-viii"].icons.front_default)
        return (
          <DetailsIcon
            source={{
              uri: sprites.versions["generation-viii"].icons.front_default,
            }}
          />
        );
      console.log("got to placeholder");
      return <PlaceholderImage source={placeholder} />;
    }

    if (type === "front_shiny") {
      if (sprites.front_shiny)
        return <DetailsImage source={{ uri: sprites.front_shiny }} />;
      if (sprites.versions["generation-viii"].icons.front_shiny)
        return (
          <DetailsIcon
            source={{
              uri: sprites.versions["generation-viii"].icons.front_default,
            }}
          />
        );
      console.log("got to null");
      return null;
    }
  };

  return (
    <DetailsImagesContainer>
      {renderImages("front_default")}
      {renderImages("front_shiny")}
    </DetailsImagesContainer>
  );
};

export default DetailsImages;
