import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authApi';
import { selectAuthStatus } from 'redux/auth/selectors';
import { LoginButton } from './AuthButton.styled';

export const AuthButton = () => {
  const isLoggedIn = useSelector(selectAuthStatus);

  const navigate = useNavigate();

  return (
    <>
      {isLoggedIn ? (
        <LoginButton type="button" onClick={() => logOut()}>
          Log out
        </LoginButton>
      ) : (
        <LoginButton type="button" onClick={() => navigate('/login')}>
          Log in
        </LoginButton>
      )}
    </>
  );
};
