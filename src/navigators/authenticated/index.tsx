import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../../const';
import { Login } from '../../screens/authentication/login';

const AuthenticatedStack = createStackNavigator();

export const Authenticated = () => {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen name={Screens.Login} component={Login} />
    </AuthenticatedStack.Navigator>
  );
};
