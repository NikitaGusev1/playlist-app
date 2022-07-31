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
  const memorySavedFlag = route.params?.memorySaved;
  const songs = useSelector((state: RootState) => state.songs.data);
  const savedSongs = useSelector((state: RootState) => state.songs.saved);

  const selected = useMemo(() => {
    if (songs) {
      if (memorySavedFlag) {
        return savedSongs;
      } else if (category) {
        return songs?.[category];
      }
    }
  }, [songs, category, savedSongs, memorySavedFlag]);

  useEffect(() => {
    if (category) {
      navigation.setOptions({ title: strings.categories[category] });
    } else if (memorySavedFlag) {
      navigation.setOptions({ title: strings.memory });
    }
  }, [navigation, category]);

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
