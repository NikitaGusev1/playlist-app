import { useLayout } from '@react-native-community/hooks';
import React, { useMemo } from 'react';
import FastImage from 'react-native-fast-image';
import styled, { css } from 'styled-components/native';

import { strings } from '../../strings/strings';
import { ISong } from '../../typescript/types';
import { MainText } from '../../typography';

interface IProps {
  data: ISong;
}

export const SongCard = ({ data }: IProps) => {
  const { image, title, size, minutes, seconds, artist } = data;
  const { onLayout, width } = useLayout();

  const imageDimensions = useMemo(() => {
    if (width) {
      return {
        width,
        height: width * 0.9,
      };
    }
  }, [width]);

  return (
    <Container>
      <ImageContainer onLayout={onLayout}>
        <>
          {width !== 0 && imageDimensions ? (
            <StyledImage
              width={imageDimensions?.width}
              height={imageDimensions?.height}
              source={{ uri: image }}
            />
          ) : null}
        </>
      </ImageContainer>
      <Title>{`${artist} - ${title}`}</Title>
      <Info>
        <Size>{`${size} ${strings.megabytes}`}</Size>
        <Length>{`${minutes}${strings.minutes} ${seconds}${strings.seconds}`}</Length>
      </Info>
    </Container>
  );
};

const Container = styled.View`
  ${({ theme }) => css`
    padding: ${theme.sizes.getSpacing(2.5)}px ${theme.sizes.appPadding}px;
    width: ${theme.sizes.categoryContainerWidth}px;
    margin-right: ${theme.sizes.appPadding}px;
  `}
`;

const ImageContainer = styled.View`
  ${({ theme }) => css`
    width: ${theme.sizes.categoryContainerWidth}px;
    margin-bottom: ${theme.sizes.spacing}px;
  `}
`;

const StyledImage = styled(FastImage)<{ width: number; height: number }>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

const Title = styled(MainText)`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.spacing / 2}px;
    flex: 1;
  `}
`;

const Size = styled(MainText)``;

const Length = styled(MainText)`
  margin-left: auto;
`;

const Info = styled.View`
  flex-direction: row;
`;
