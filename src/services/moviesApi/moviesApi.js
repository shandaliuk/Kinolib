import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getDocs } from 'firebase/firestore';
import { createUserCollection } from 'services/firebase/firebase';

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

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
      query: ({ page = 1, query }) =>
        `search/movie?query=${query}&page=${page}&api_key=${KEY}`,
    }),
    getUserMovies: builder.query({
      query: async ({ id }) => {
        const collection = createUserCollection(id);
        const querySnapshot = await getDocs(collection);
        console.log(querySnapshot);
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      },
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieQuery,
  useGetUserMoviesQuery,
} = moviesApi;
