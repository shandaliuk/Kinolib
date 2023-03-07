import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    setLogIn(_, action) {
      return action.payload;
    },
    setLogOut() {
      return null;
    },
  },
});

export const { setLogIn, setLogOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
