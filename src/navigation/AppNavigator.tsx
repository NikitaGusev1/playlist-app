import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { AllSongsScreen } from '../screens/AllSongsScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { EAppScreens } from '../typescript/statics/EAppScreens';
import { HEADER_OPTIONS } from './options';

export const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={EAppScreens.Home}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ ...HEADER_OPTIONS }}
          name={EAppScreens.AllSongs}
          component={AllSongsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
