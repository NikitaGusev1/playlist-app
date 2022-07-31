import React from 'react';
import styled, { css } from 'styled-components/native';

import { icons } from '../../assets/icons';
import { IconButton } from '../../components/buttons';
import { strings } from '../../strings/strings';
import { ISong } from '../../typescript/types';
import { MainText } from '../../typography';

interface IProps {
  item: ISong;
}

export const ListItem = ({ item }: IProps) => {
  const { title, size, minutes, seconds, artist } = item;

  return (
    <>
      <Container>
        <Wrapper>
          <Title>{`${artist} - ${title}`}</Title>
          <InfoContainer>
            <Misc>{`${size}${strings.megabytes} - `}</Misc>
            <Misc>{`${minutes}${strings.minutes} ${seconds}${strings.minutes}`}</Misc>
          </InfoContainer>
        </Wrapper>
        {/* TODO: implement saving to redux */}
        <SaveToMemoryButton icon={icons.save} onPress={() => {}} />
        {/* TODO: implement saving to fs */}
        <SaveToFileSystemButton icon={icons.download} onPress={() => {}} />
      </Container>
      <Divider />
    </>
  );
};

const Container = styled.View`
  flex-direction: row;
  ${({ theme }) => css`
    padding: ${theme.sizes.getSpacing(2.5)}px ${theme.sizes.appPadding}px;
    align-items: center;
    flex: 1;
  `}
`;

const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.divider};
`;

const Title = styled(MainText)`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.spacing / 2}px;
    font-weight: ${theme.font.weight.bold};
  `}
`;

const Misc = styled(MainText)`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
  `}
`;

const InfoContainer = styled.View`
  flex-direction: row;
`;

const SaveToMemoryButton = styled(IconButton)`
  margin-left: auto;
`;

const SaveToFileSystemButton = styled(IconButton)`
  ${({ theme }) => css`
    margin-left: ${theme.sizes.appPadding}px;
  `}
`;

const Wrapper = styled.View`
  flex: 1;
`;
