import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectQuery } from 'redux/query/selectors';

export const MoviesHome = () => {
  const query = useSelector(selectQuery);

  return query.length === 0 ? (
    <Navigate to="trending" />
  ) : (
    <Navigate to={query} />
  );
};
