import React, { useEffect } from 'react';

import { AppLayout } from '../layouts/AppLayout';
import { ScreenProps } from '../typescript';
import { EAppScreens } from '../typescript/statics/EAppScreens';
import { MainText } from '../typography';

interface IProps extends ScreenProps<EAppScreens.AllSongs> {}

export const AllSongsScreen = ({ route, navigation }: IProps) => {
  const title = route.params?.title;

  useEffect(() => {
    navigation.setOptions({ title });
  }, [navigation]);

  return (
    <AppLayout>
      <MainText>All songs</MainText>
    </AppLayout>
  );
};
