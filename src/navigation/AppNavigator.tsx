import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HomeScreen } from '../screens/HomeScreen';
import { EAppScreens } from '../typescript/statics/EAppScreens';

export const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={EAppScreens.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
