import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { defaultTheme } from '../theme/defaultTheme';

export const HEADER_OPTIONS: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTintColor: defaultTheme.colors.text,
  headerTitleAlign: 'center',
};
