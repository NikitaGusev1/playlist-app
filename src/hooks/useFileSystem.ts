import { useCallback } from 'react';
import RNFS from 'react-native-fs';
import { useDispatch, useSelector } from 'react-redux';

import { setDownloadedSongs } from '../redux/slices/songsSlice';
import { RootState } from '../redux/store';
import { ISong } from '../typescript/types';

export const useFileSystem = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs.data);
  const writeFile = useCallback(async (item: ISong) => {
    try {
      const path = RNFS.ExternalDirectoryPath + `/${item.title}.txt`;
      const data = JSON.stringify(item);

      await RNFS.writeFile(path, data, 'utf8');
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  const readFiles = useCallback(async () => {
    const result = await RNFS.readDir(RNFS.ExternalDirectoryPath);
    const downloaded = result.map(value => value.name);
    const newStrings = downloaded.map(val => val.replace('.txt', ''));
    if (songs) {
      const values = Object.values(songs);
      const savedArray: ISong[] = [];

      values.forEach(category => {
        newStrings.forEach(savedValue => {
          category.forEach((song: ISong) => {
            if (song.title === savedValue) {
              savedArray.push(song);
            }
          });
        });
      });

      dispatch(setDownloadedSongs(savedArray));
    }
  }, [dispatch]);

  //TODO delete and show on screen

  const deleteFile = useCallback(() => {}, []);

  return { writeFile, readFiles };
};
