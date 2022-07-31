import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICategories, ISong } from '../../typescript/types';

export interface SongsState {
  data: ICategories | undefined;
  saved: ISong[];
  downloaded: ISong[];
}

const initialState: SongsState = {
  data: undefined,
  saved: [],
  downloaded: [],
};

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setAllSongs: (state = initialState, action: PayloadAction<ICategories>) => {
      state.data = action.payload;
    },

    setDownloadedSongs: (state, action: PayloadAction<ISong[]>) => {
      state.downloaded = action.payload;
    },

    saveSong: (state, action: PayloadAction<ISong>) => {
      const song = action.payload;
      state.saved?.push(song);
    },

    deleteSong: (state, action: PayloadAction<ISong>) => {
      const song = action.payload;

      const index = state.saved.findIndex(val => val === song);
      if (index !== -1) {
        state.saved.splice(index, 1);
      }
    },
  },
});

export const { setAllSongs, saveSong, deleteSong, setDownloadedSongs } =
  songsSlice.actions;

export default songsSlice.reducer;
