import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/selectors';
import { useGetUserMoviesQuery } from 'services/userMoviesApi/userMoviesApi';

export const Watched = () => {
  const [skip, setSkip] = useState(true);

  const user = useSelector(selectAuthStatus);

  const { data, error, isLoading } = useGetUserMoviesQuery(user, { skip });

  if (user && skip) {
    setSkip(false);
    return;
  }
  return null;
};
