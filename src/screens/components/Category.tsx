import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import styled, { css } from 'styled-components/native';

import { MainButton } from '../../components/buttons/MainButton';
import { strings } from '../../strings/strings';
import { EAppScreens } from '../../typescript/statics/EAppScreens';
import { ECategories } from '../../typescript/statics/ECategories';
import { ISong } from '../../typescript/types';
import { HeaderText } from '../../typography';
import { SongCard } from './SongCard';

interface IProps {
  data: ISong[];
  category: ECategories;
}

export const Category = ({ data, category }: IProps) => {
  const navigation = useNavigation();

  const renderSong: ListRenderItem<ISong> = useCallback(({ item }) => {
    return <SongCard data={item} />;
  }, []);

  return (
    <Container>
      <Header>
        <Title>{strings.categories[category]}</Title>
        <SeeAllButton
          label={strings.buttons.seeAll}
          onPress={() =>
            navigation.navigate(EAppScreens.AllSongs, { category })
          }
        />
      </Header>
      <FlatList
        data={data}
        renderItem={renderSong}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

const Container = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.appPadding}px;
    padding-horizontal: ${theme.sizes.appPadding}px;
  `}
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SeeAllButton = styled(MainButton)`
  margin-left: auto;
`;

const Title = styled(HeaderText)``;
