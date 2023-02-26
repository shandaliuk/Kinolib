import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from 'services/moviesApi/moviesApi';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
