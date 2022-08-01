import React, { useCallback, useEffect, useMemo } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { AppLayout } from '../layouts/AppLayout';
import { RootState } from '../redux/store';
import { strings } from '../strings/strings';
import { ScreenProps } from '../typescript';
import { EAppScreens } from '../typescript/statics/EAppScreens';
import { ISong } from '../typescript/types';
import { MainText } from '../typography';
import { ListItem } from './components/ListItem';

interface IProps extends ScreenProps<EAppScreens.AllSongs> {}

export const AllSongsScreen = ({ route, navigation }: IProps) => {
  const category = route.params?.category;
  const memorySavedFlag = route.params?.memorySaved;
  const fileSystemSavedFlag = route.params?.fileSystemSaved;
  const songs = useSelector((state: RootState) => state.songs.data);
  const savedSongs = useSelector((state: RootState) => state.songs.saved);
  const downloadedSongs = useSelector(
    (state: RootState) => state.songs.downloaded,
  );

  const selected = useMemo(() => {
    if (songs) {
      if (memorySavedFlag) {
        return savedSongs;
      } else if (category) {
        return songs?.[category];
      } else if (fileSystemSavedFlag) {
        return downloadedSongs;
      }
    }
  }, [
    songs,
    category,
    savedSongs,
    memorySavedFlag,
    downloadedSongs,
    fileSystemSavedFlag,
  ]);

  useEffect(() => {
    if (category) {
      navigation.setOptions({ title: strings.categories[category] });
    } else if (memorySavedFlag) {
      navigation.setOptions({ title: strings.memory });
    } else if (fileSystemSavedFlag) {
      navigation.setOptions({ title: strings.fileSystem });
    }
  }, [navigation, category, memorySavedFlag, fileSystemSavedFlag]);

  const renderItem: ListRenderItem<ISong> = useCallback(({ item }) => {
    return <ListItem item={item} key={item.title} />;
  }, []);

  return (
    <AppLayout withoutScrollView={true}>
      <FlatList
        data={selected}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Empty>
            <MainText>No Files Found</MainText>
          </Empty>
        }
      />
    </AppLayout>
  );
};

const Empty = styled.View`
  align-self: center;
`;
