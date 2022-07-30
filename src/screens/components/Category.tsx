import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import styled, { css } from 'styled-components/native';

import { MainButton } from '../../components/buttons/MainButton';
import { strings } from '../../strings/strings';
import { ISong } from '../../typescript/types';
import { HeaderText } from '../../typography';
import { SongCard } from './SongCard';

interface IProps {
  data: ISong[];
  title: string;
}

export const Category = ({ data, title }: IProps) => {
  console.log(data);

  const renderSong: ListRenderItem<ISong> = useCallback(({ item }) => {
    return <SongCard data={item} />;
  }, []);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {/* TODO: implement see all */}
        <SeeAllButton label={strings.buttons.seeAll} onPress={() => {}} />
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
