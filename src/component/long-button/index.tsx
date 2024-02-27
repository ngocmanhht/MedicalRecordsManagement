import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../text';
import LinearGradient from 'react-native-linear-gradient';
import { borderRadius, FontSizes } from '../../assets/styles/tyography';

export const LongButton = ({
  onPress,
  text,
}: {
  onPress: () => void;
  text: string;
}) => {
  return (
    <LinearGradient
      style={{
        width: '100%',
        borderRadius: borderRadius,
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#02457A', '#018ABE']}
    >
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            width: '100%',
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: borderRadius,
          },
        ]}
      >
        <Text
          style={{ fontWeight: 'bold', fontSize: FontSizes.xl, color: 'white' }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
