import React, { useCallback, useEffect, useMemo } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';

import { AppLayout } from '../layouts/AppLayout';
import { RootState } from '../redux/store';
import { strings } from '../strings/strings';
import { ScreenProps } from '../typescript';
import { EAppScreens } from '../typescript/statics/EAppScreens';
import { ISong } from '../typescript/types';
import { ListItem } from './components/ListItem';

interface IProps extends ScreenProps<EAppScreens.AllSongs> {}

export const AllSongsScreen = ({ route, navigation }: IProps) => {
  const category = route.params?.category;
  const songs = useSelector((state: RootState) => state.songs.data);

  const selected = useMemo(() => {
    if (songs) {
      return songs?.[category];
    }
  }, [songs, category]);

  useEffect(() => {
    navigation.setOptions({ title: strings.categories[category] });
  }, [navigation]);

  const renderItem: ListRenderItem<ISong> = useCallback(({ item }) => {
    return <ListItem item={item} key={item.title} />;
  }, []);

  return (
    <AppLayout withoutScrollView={true}>
      <FlatList
        data={selected}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </AppLayout>
  );
};
