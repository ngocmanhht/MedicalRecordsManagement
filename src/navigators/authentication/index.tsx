import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../../const';
import { Login } from '../../screens/authentication/login';
import { ResetPassword } from '../../screens/authentication/reset-password';
import { ResetSuccess } from '../../screens/authentication/reset-password/reset-success';

const AuthenticationStack = createStackNavigator();

export const Authentication = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={Screens.Login} component={Login} />
      <AuthenticationStack.Screen
        name={Screens.ResetPassword}
        component={ResetPassword}
      />
      <AuthenticationStack.Screen
        name={Screens.ResetPasswordSuccess}
        component={ResetSuccess}
      />
    </AuthenticationStack.Navigator>
  );
};
