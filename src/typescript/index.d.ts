import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EAppScreens } from './statics/EAppScreens';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationScreensParamList {}
  }
}

type ScreenParamList = {
  /**
   * All app screen param types go here. Params are undefined by default for all app screens.
   * example: [EAppScreens.Home]: { step: 0 };
   */
  [EAppScreens.AllSongs]: { title: string };
};

type NavigationScreensParamList = Override<
  { [K in EAppScreens]: undefined },
  ScreenParamList
>;

export type ScreenProps<K extends keyof NavigationScreensParamList> =
  NativeStackScreenProps<NavigationScreensParamList, K>;

export type Navigation = NavigationProp<NavigationScreensParamList>;

type ReducerActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type ReducerActions<P extends {}> =
  ReducerActionMap<P>[keyof ReducerActionMap<P>];

export type AtomicParamList = { [key: string]: string | number | boolean };

export type Override<T, R> = Omit<T, keyof R> & R;
