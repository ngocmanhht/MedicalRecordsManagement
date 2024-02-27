/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { AppNavigator } from './src/navigators';
import { Provider } from 'mobx-react';
import stores from './src/stores';
import Toast, { ToastConfig } from 'react-native-toast-message';
import { toastConfig } from './src/config/toast-config';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider {...stores}>
        <AppNavigator />
        <Toast config={toastConfig as ToastConfig} />
      </Provider>
    </>
  );
}

export default App;
