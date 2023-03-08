import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getDoc } from 'firebase/firestore';
import { createUserDoc } from 'services/firebase/firebase';

export const userMoviesApi = createApi({
  reducerPath: 'userMoviesApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getUserMovies: builder.query({
      queryFn: async id => {
        const doc = createUserDoc(id);
        const moviesSnap = await getDoc(doc);
        return moviesSnap.data();
      },
    }),
  }),
});

export const { useGetUserMoviesQuery } = userMoviesApi;
