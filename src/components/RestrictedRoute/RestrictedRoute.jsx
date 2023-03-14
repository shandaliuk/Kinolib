import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectAuthStatus);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
