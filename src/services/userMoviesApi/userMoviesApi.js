import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { createUserDoc } from 'services/firebase/firebase';

export const userMoviesApi = createApi({
  reducerPath: 'userMoviesApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['UserMovies'],
  endpoints: builder => ({
    getUserMovies: builder.query({
      queryFn: async id => {
        try {
          const doc = createUserDoc(id);
          const moviesSnap = await getDoc(doc);
          return { data: moviesSnap.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['UserMovies'],
    }),
    addMovie: builder.mutation({
      queryFn: async ({ location, movieToSave, id }) => {
        try {
          const doc = createUserDoc(id);
          await updateDoc(
            doc,
            { [location]: arrayUnion(movieToSave) },
            { merge: true }
          );
          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['UserMovies'],
    }),
    deleteMovie: builder.mutation({
      queryFn: async ({ location, currentMovie, id }) => {
        try {
          const doc = createUserDoc(id);
          await updateDoc(
            doc,
            { [location]: arrayRemove(currentMovie) },
            { merge: true }
          );
          return { data: 'ok' };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['UserMovies'],
    }),
  }),
});

// export const addMovie = async ({ id, movie, location }) => {
//   const doc = createUserDoc(id);
//   await updateDoc(doc, { [location]: arrayUnion(movie) }, { merge: true });
// };

export const {
  useGetUserMoviesQuery,
  useAddMovieMutation,
  useDeleteMovieMutation,
} = userMoviesApi;
