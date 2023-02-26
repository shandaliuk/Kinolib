import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: false,
  reducers: {
    setLogIn() {
      return true;
    },
    setLogOut() {
      return false;
    },
  },
});

export const { setLogIn, setLogOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
