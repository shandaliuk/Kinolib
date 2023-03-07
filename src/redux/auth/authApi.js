import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { app, dataBase } from 'services/firebase/firebase';

const auth = getAuth(app);

export const logIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  auth.signOut();
};

export const register = async (email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  const document = await doc(dataBase, 'users', user.user.uid);
  await setDoc(document, {
    watched: [],
    queue: [],
  });
};
