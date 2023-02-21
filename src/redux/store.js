import { configureStore } from '@reduxjs/toolkit';
import { queryReducer } from 'redux/query/query';
import { moviesApi } from 'services/moviesApi/moviesApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    query: queryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
