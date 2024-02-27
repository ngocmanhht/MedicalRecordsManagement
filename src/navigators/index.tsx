import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../const';
import { Authentication } from './authentication';
import { Authenticated } from './authenticated';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigatorStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigatorStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppNavigatorStack.Screen
          name={Screens.Authentication}
          component={Authentication}
        />
        <AppNavigatorStack.Screen
          name={Screens.Authenticate}
          component={Authenticated}
        />
      </AppNavigatorStack.Navigator>
    </NavigationContainer>
  );
};
