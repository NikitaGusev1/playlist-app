import { useCallback, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { useDispatch } from 'react-redux';

import { categories } from '../../mockData/Categories';
import { setAllSongs } from '../redux/slices/songsSlice';

export const useBootstrap = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const dispatch = useDispatch();

  const runBootstrap = useCallback(() => {
    dispatch(setAllSongs(categories));
    setTimeout(() => RNBootSplash.hide({ fade: true }), 350);

    setIsAppLoaded(true);
  }, [dispatch, categories]);

  return { runBootstrap, isAppLoaded };
};
