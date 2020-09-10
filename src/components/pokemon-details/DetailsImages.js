import React from "react";
import { View, Image } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";

const DetailsImagesContainer = styled(View)`flx-row jcc`;
const DetailsImage = styled(Image)`wp40 ar-1`;

const DetailsImages = ({ images }) => {
  const renderImage = (uri) => {
    return <DetailsImage source={{ uri }} />;
  };

  return (
    <DetailsImagesContainer>
      {renderImage(images.front_default)}
      {renderImage(images.front_shiny)}
    </DetailsImagesContainer>
  );
};

export default DetailsImages;
