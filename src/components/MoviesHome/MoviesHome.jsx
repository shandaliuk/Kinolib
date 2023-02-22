import { Navigate } from 'react-router-dom';

export const MoviesHome = () => {
  return <Navigate to="trending?page=1" />;
};
