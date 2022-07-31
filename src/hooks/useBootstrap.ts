import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { categories } from '../../mockData/Categories';
import { setAllSongs } from '../redux/slices/songsSlice';

export const useBootstrap = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const dispatch = useDispatch();

  const runBootstrap = useCallback(() => {
    // TODO: put Bootsplash fade here
    dispatch(setAllSongs(categories));

    setIsAppLoaded(true);
  }, [dispatch, categories]);

  return { runBootstrap, isAppLoaded };
};
