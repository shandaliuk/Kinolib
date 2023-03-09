import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { createUserDoc } from 'services/firebase/firebase';

export const userMoviesApi = createApi({
  reducerPath: 'userMoviesApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getUserMovies: builder.query({
      queryFn: async id => {
        const doc = createUserDoc(id);
        const moviesSnap = await getDoc(doc);
        return { data: moviesSnap.data() };
      },
    }),
  }),
});

export const addMovie = async ({ id, movie, location }) => {
  const doc = createUserDoc(id);
  await updateDoc(doc, { [location]: arrayUnion(movie) }, { merge: true });
};

export const { useGetUserMoviesQuery, useAddWatchedMovieQuery } = userMoviesApi;
