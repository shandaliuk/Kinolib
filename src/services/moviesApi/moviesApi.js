import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const KEY = 'f482511e908c5491e9f1e2c33a3c3db7';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: builder => ({
    getTrendingMovies: builder.query({
      query: (page = 1) => `trending/movie/day?page=${page}&api_key=${KEY}`,
    }),
    getMovieDetails: builder.query({
      query: id => `movie/${id}?api_key=${KEY}`,
    }),
    getMovie: builder.query({
      query: (query, page = 1) => {
        console.log('Here', page);
        return `search/movie?query=${query}&page=${page}&api_key=${KEY}`;
      },
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieQuery,
} = moviesApi;
