import React from 'react';

import { StyleSheet, Text as RNText, TextProps } from 'react-native';

export const Text = (props: TextProps) => {
  const { fontWeight } = StyleSheet.flatten(props.style || {});
  return (
    <RNText
      style={[
        {
          fontFamily:
            fontWeight === 'bold' ? 'IstokWeb-Bold' : 'IstokWeb-Regular',
        },
        props.style,
      ]}
    >
      {props.children}
    </RNText>
  );
};
