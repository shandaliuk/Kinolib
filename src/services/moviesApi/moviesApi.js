import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  tagTypes: ['Movies', 'Movie'],
  endpoints: builder => ({
    getTrendingMovies: builder.query({
      query: (page = 1) => `trending/movie/day?page=${page}&api_key=${KEY}`,
      providesTags: ['Movies'],
    }),
    getMovieDetails: builder.query({
      query: id => `movie/${id}?api_key=${KEY}`,
      providesTags: ['Movie'],
    }),
    getMovie: builder.query({
      query: ({ page = 1, query }) =>
        `search/movie?query=${query}&page=${page}&api_key=${KEY}`,
      providesTags: ['Movie'],
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieQuery,
} = moviesApi;
