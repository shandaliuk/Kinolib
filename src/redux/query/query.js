import { createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'query',
  initialState: '',
  reducers: {
    setQuery(_, action) {
      return action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;

export const queryReducer = querySlice.reducer;
