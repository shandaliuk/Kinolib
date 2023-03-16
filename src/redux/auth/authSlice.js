import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: false,
  reducers: {
    setLogIn(_, action) {
      return action.payload;
    },
    setLogOut() {
      return false;
    },
  },
});

export const { setLogIn, setLogOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
