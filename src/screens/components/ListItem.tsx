import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components/native';

import { icons } from '../../assets/icons';
import { IconButton } from '../../components/buttons';
import { useFileSystem } from '../../hooks';
import { deleteSong, saveSong } from '../../redux/slices/songsSlice';
import { RootState } from '../../redux/store';
import { strings } from '../../strings/strings';
import { ISong } from '../../typescript/types';
import { MainText } from '../../typography';

interface IProps {
  item: ISong;
}

export const ListItem = ({ item }: IProps) => {
  const { title, size, minutes, seconds, artist } = item;
  const dispatch = useDispatch();
  const saved = useSelector((state: RootState) => state.songs.saved);
  const { downloaded } = useSelector((state: RootState) => state.songs);
  const { writeFile, readFiles, deleteFile } = useFileSystem();

  useEffect(() => {
    readFiles();
  }, []);

  const handleSaveToMemory = useCallback(() => {
    if (saved.some(val => val.title === title)) {
      dispatch(deleteSong(item));
    } else {
      dispatch(saveSong(item));
    }
  }, [item, title, dispatch, saved]);

  const renderSaveIcon = useMemo(() => {
    if (saved.some(val => val.title === title)) {
      return icons.checkmark;
    } else {
      return icons.save;
    }
  }, [saved, title]);

  const renderDownloadIcon = useMemo(() => {
    if (downloaded.some(val => val.title === title)) {
      return icons.checkmark;
    } else {
      return icons.download;
    }
  }, [downloaded, title]);

  const handleDownload = useCallback(() => {
    if (downloaded.some(val => val.title === title)) {
      deleteFile(item);
    } else {
      writeFile(item);
    }

    readFiles();
  }, [writeFile, readFiles, downloaded, title, deleteFile]);

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
        <SaveToMemoryButton
          icon={renderSaveIcon}
          onPress={handleSaveToMemory}
        />
        <SaveToFileSystemButton
          icon={renderDownloadIcon}
          onPress={handleDownload}
        />
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
