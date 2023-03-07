import { useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/selectors';
import { useGetUserMoviesQuery } from 'services/userMoviesApi/userMoviesApi';

export const Watched = () => {
  const { data, error, isLoading } = useGetUserMoviesQuery(
    useSelector(selectAuthStatus)
  );
  console.log(isLoading);
  return null;
};
