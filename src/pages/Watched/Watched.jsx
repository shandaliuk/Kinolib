import { useGetUserMoviesQuery } from 'services/moviesApi/moviesApi';
// import { getCurrentUser } from 'services/serviceApi';

export const Watched = () => {
  //   const user = getCurrentUser();
  const movies = useGetUserMoviesQuery('ojo3ZnIlZJVJe0cx4LMTZGJsvAt2');

  return null;
};
