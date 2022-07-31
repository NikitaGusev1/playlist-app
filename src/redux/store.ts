import { configureStore } from '@reduxjs/toolkit';

import songsReducer from './slices/songsSlice';

export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
