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
        <LoginButton
          type="button"
          onClick={() => logOut()}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
        >
          Log out
        </LoginButton>
      ) : (
        <LoginButton
          type="button"
          onClick={() => navigate('/login')}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
        >
          Log in
        </LoginButton>
      )}
    </>
  );
};
