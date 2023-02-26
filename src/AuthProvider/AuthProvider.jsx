import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app } from 'services/firebase/firebase';
import { googleAuthProvider } from 'services/firebase/firebase';

export const AuthProvider = () => {
  const auth = getAuth(app);

  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser !== null) {
        setUser(maybeUser);
        return;
      }
      const authenticate = async () => {
        try {
          const credentials = await signInWithPopup(auth, googleAuthProvider);
          setUser(credentials.user);
        } catch (error) {
          console.log(error.message);
        }
      };
      authenticate();
    });
    return unsub;
  }, [auth]);

  return user !== null ? <>{user.displayName}</> : <>Loading...</>;
};
