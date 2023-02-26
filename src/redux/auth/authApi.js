import { getAuth } from 'firebase/auth';
import { app } from 'services/firebase/firebase';

const auth = getAuth(app);

export const logOut = () => {
  auth.signOut();
};
