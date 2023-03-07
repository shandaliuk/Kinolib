import { initializeApp } from 'firebase/app';
import { getFirestore, doc } from 'firebase/firestore';

const AUTH_KEY = process.env.REACT_APP_AUTH_API_KEY;

const firebaseConfig = {
  apiKey: AUTH_KEY,
  authDomain: 'kinolib-adbbf.firebaseapp.com',
  projectId: 'kinolib-adbbf',
  storageBucket: 'kinolib-adbbf.appspot.com',
  messagingSenderId: '274165933642',
  appId: '1:274165933642:web:50e8a252b8dd722fe9a8b3',
};

export const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);

export const createUserDoc = id => doc(dataBase, 'users', id);
