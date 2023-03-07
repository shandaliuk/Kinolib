import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from 'services/moviesApi/moviesApi';
import { userMoviesApi } from 'services/userMoviesApi/userMoviesApi';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [userMoviesApi.reducerPath]: userMoviesApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      moviesApi.middleware,
      userMoviesApi.middleware,
    ]),
});
