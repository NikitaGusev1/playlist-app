import { isEmpty } from 'lodash';
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
    try {
      const path = RNFS.ExternalDirectoryPath;
      if (path) {
        const result = await RNFS.readDir(path);
        const downloaded = result?.map(value => value.name);
        const newStrings = downloaded?.map(val => val.replace('.txt', ''));

        if (songs && !isEmpty(result)) {
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
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, [dispatch]);

  const deleteFile = useCallback(async (item: ISong) => {
    try {
      const path = RNFS.ExternalDirectoryPath + `/${item.title}.txt`;

      await RNFS.unlink(path);
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return { writeFile, readFiles, deleteFile };
};
