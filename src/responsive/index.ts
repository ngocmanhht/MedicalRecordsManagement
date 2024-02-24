import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const screenWidth = (value: string | number) => {
  return wp(value);
};

export const screenHeight = (value: string | number) => {
  return hp(value);
};
