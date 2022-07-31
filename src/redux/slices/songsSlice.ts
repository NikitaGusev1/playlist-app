import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICategories, ISong } from '../../typescript/types';

export interface SongsState {
  data: ICategories | undefined;
}

const initialState: SongsState = {
  data: undefined,
};

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setAllSongs: (state = initialState, action: PayloadAction<ICategories>) => {
      state.data = action.payload;
    },
  },
});

export const { setAllSongs } = songsSlice.actions;

export default songsSlice.reducer;
