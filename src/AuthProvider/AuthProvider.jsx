import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { app } from 'services/firebase/firebase';
import { setLogIn, setLogOut } from 'redux/auth/authSlice';

export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(setLogIn());
        return;
      }
      dispatch(setLogOut());
    });
    return unsub;
  }, [dispatch, auth]);

  return <>{children}</>;
};
