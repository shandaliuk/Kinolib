import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { app } from 'services/firebase/firebase';

const auth = getAuth(app);

export const logIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  auth.signOut();
};

export const register = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};
