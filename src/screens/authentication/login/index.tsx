import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Container from '../../../component/container';
import { images } from '../../../assets/images';
import { Text } from '../../../component/text';
import { FontSizes, Padding } from '../../../assets/styles/tyography';
import { CustomTextInput } from '../../../component/custom-text-input';
import { icons } from '../../../assets/icons';
import { LongButton } from '../../../component/long-button';
import { screenHeight } from '../../../responsive';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../../const';
import { Controller, useForm } from 'react-hook-form';
import useToast from '../../../hook/use-toast';

export const Login = () => {
  const navigation = useNavigation();

  const toast = useToast();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Container src={images.AuthenticationBackground}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.2 }} />
        <View style={{ flex: 5, alignItems: 'center', gap: 30 }}>
          <Text style={styles.header}>Đăng Nhập</Text>

          <View
            style={{ flex: 1, width: '100%', padding: Padding.screen, gap: 10 }}
          >
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  value={value}
                  onChangeText={onChange}
                  placeHolder={'Nhập email'}
                  icon={icons.Mail}
                />
              )}
              name={'email'}
            />
            <View style={{ gap: 5 }}>
              <CustomTextInput
                placeHolder={'Nhập mật khẩu'}
                icon={icons.Lock}
                showEyeIcon
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(Screens.ResetPassword as never);
                }}
              >
                <Text style={{ alignSelf: 'flex-end', color: '#989898' }}>
                  Quên mật khẩu ?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: screenHeight(5) }}>
              <LongButton
                onPress={() => {
                  toast.show({
                    type: 'success',
                    content: 'aloo',
                  });
                }}
                text={'Đăng Nhập'}
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
