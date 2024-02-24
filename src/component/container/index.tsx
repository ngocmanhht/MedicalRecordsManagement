import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
} from 'react-native';

const Container = ({
  children,
  src,
}: {
  src: ImageSourcePropType;
  children?: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <ImageBackground source={src} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default Container;
