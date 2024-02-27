import React from 'react';
import { StyleSheet, View } from 'react-native';
import Container from '../../../component/container';
import { images } from '../../../assets/images';
import { Text } from '../../../component/text';
import { FontSizes, Padding } from '../../../assets/styles/tyography';
import { CustomTextInput } from '../../../component/custom-text-input';
import { icons } from '../../../assets/icons';
import { LongButton } from '../../../component/long-button';
import { screenHeight } from '../../../responsive';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../../const';

export const ResetPassword = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const navigation = useNavigation();

  return (
    <Container src={images.AuthenticationBackground}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.2 }} />
        <View style={{ flex: 5, alignItems: 'center', gap: 30 }}>
          <Text style={styles.header}>Quên mật khẩu</Text>

          <View
            style={{ flex: 1, width: '100%', padding: Padding.screen, gap: 10 }}
          >
            <Text
              style={{
                fontSize: FontSizes.xl,
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              Vui lòng nhập địa chỉ email đã đăng ký tài khoản!
            </Text>

            <CustomTextInput placeHolder={'Nhập email'} icon={icons.Mail} />

            <View style={{ marginTop: screenHeight(5) }}>
              <LongButton
                onPress={() => {
                  navigation.navigate(Screens.ResetPasswordSuccess as never);
                }}
                text={'Tiếp tục'}
              />
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: FontSizes.xxxl,
  },
});
