import { cloneDeep, isEmpty } from 'lodash';
import React, { Fragment, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components/native';
import { $enum } from 'ts-enum-util';

import { AppLayout } from '../layouts/AppLayout';
import { RootState } from '../redux/store';
import { strings } from '../strings/strings';
import { ScreenProps } from '../typescript';
import { EAppScreens } from '../typescript/statics/EAppScreens';
import { ECategories } from '../typescript/statics/ECategories';
import { HeaderText } from '../typography';
import { countLength } from '../utils/helpers';
import { Category } from './components/Category';
import { HomeScreenListItem } from './components/HomeScreenListItem';

interface IProps extends ScreenProps<EAppScreens.Home> {}

export const HomeScreen = ({ navigation }: IProps) => {
  const songsData = useSelector((state: RootState) => state.songs.data);
  const savedSongs = useSelector((state: RootState) => state.songs.saved);
  const downloadedSongs = useSelector(
    (state: RootState) => state.songs.downloaded,
  );

  const memorySavedLength = useMemo(() => {
    return countLength(savedSongs);
  }, [savedSongs]);

  const fileSystemSavedLength = useMemo(() => {
    return countLength(downloadedSongs);
  }, [downloadedSongs]);

  const renderCategory = useCallback(
    (category: ECategories) => {
      const songs = cloneDeep(songsData);
      const shuffled = songs?.[category].sort(() => 0.5 - Math.random());
      const selected = shuffled?.slice(0, 5);

      return (
        <Fragment key={category}>
          {selected && !isEmpty(selected) ? (
            <Category data={selected} category={category} />
          ) : null}
        </Fragment>
      );
    },
    [songsData],
  );

  return (
    <AppLayout withHeader={true}>
      <>{$enum(ECategories).map(renderCategory)}</>
      <StorageHeader>{strings.storage}</StorageHeader>
      <HomeScreenListItem
        title={strings.memory}
        minutes={memorySavedLength.totalMinutes}
        seconds={memorySavedLength.totalSeconds}
        onPress={() =>
          navigation.navigate(EAppScreens.AllSongs, { memorySaved: true })
        }
      />
      <HomeScreenListItem
        title={strings.fileSystem}
        minutes={fileSystemSavedLength.totalMinutes}
        seconds={fileSystemSavedLength.totalSeconds}
        onPress={() =>
          navigation.navigate(EAppScreens.AllSongs, { fileSystemSaved: true })
        }
      />
    </AppLayout>
  );
};

const StorageHeader = styled(HeaderText)`
  ${({ theme }) => css`
    margin-left: ${theme.sizes.appPadding}px;
    margin-bottom: ${theme.sizes.spacing}px;
  `}
`;
