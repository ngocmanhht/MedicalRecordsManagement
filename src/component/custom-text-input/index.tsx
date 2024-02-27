import React, { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { icons } from '../../assets/icons';
import { borderRadius } from '../../assets/styles/tyography';

export const CustomTextInput = ({
  icon,
  placeHolder,
  showEyeIcon,
  onChangeText,
  value,
}: {
  icon: ImageSourcePropType;
  placeHolder: string;
  showEyeIcon?: boolean;
  value?: string;
  onChangeText?: (value: string) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [show, setShow] = useState(false);
  return (
    <View
      style={{
        width: '100%',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: borderRadius,
        borderColor: isFocused ? '#018ABE' : 'white',
        backgroundColor: 'white',
        paddingRight: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
        }}
      >
        <View
          style={{
            padding: 6,
            backgroundColor: '#D6E8EE',
            borderRadius: borderRadius,
          }}
        >
          <Image
            style={{
              width: 35,
              height: undefined,
              aspectRatio: 1,
            }}
            resizeMode={'contain'}
            source={icon}
          />
        </View>
        <TextInput
          style={{
            flex: 1,
            paddingHorizontal: 5,
          }}
          placeholder={placeHolder}
          secureTextEntry={show}
          value={value}
          onChangeText={onChangeText}
          onFocus={(e) => setIsFocused(true)}
          onEndEditing={(e) => setIsFocused(false)}
        />
      </View>
      {showEyeIcon && (
        <TouchableOpacity
          onPress={() => setShow(!show)}
          style={{ justifyContent: 'center' }}
        >
          <Image
            style={{ width: 25, height: undefined, aspectRatio: 1 }}
            resizeMode={'contain'}
            source={show ? icons.EyeHide : icons.EyeOpen}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
