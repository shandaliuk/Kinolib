// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const AUTH_KEY = import.meta.env.VITE_AUTH_API_KEY;

const firebaseConfig = {
  apiKey: AUTH_KEY,
  authDomain: 'kinolib-adbbf.firebaseapp.com',
  projectId: 'kinolib-adbbf',
  storageBucket: 'kinolib-adbbf.appspot.com',
  messagingSenderId: '274165933642',
  appId: '1:274165933642:web:50e8a252b8dd722fe9a8b3',
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
