import { Route, Routes, useLocation } from 'react-router-dom';
import { PrivateRoute } from 'PrivateRoute/PrivateRoute';
import { AnimatePresence } from 'framer-motion';
import { RestrictedRoute } from 'RestrictedRoute/RestrictedRoute';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Movies from './Movies/Movies';
import MoviesHome from './MoviesHome/MoviesHome';
import TrendingMovies from 'pages/TrendingMovies/TrendingMovies';
import SearchedMovies from './Movies/SearchedMovies/SearchedMovies';
import Library from 'pages/Library/Library';
import LibraryIndex from './LibraryIndex/LibraryIndex';
import Watched from 'pages/Watched/Watched';
import Queue from 'pages/Queue/Queue';
import Error from 'pages/Error/Error';

export const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/library" />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute component={<Register />} redirectTo="/library" />
            }
          />
          <Route path="movies" element={<Movies />}>
            <Route index element={<MoviesHome />} />
            <Route path="trending" element={<TrendingMovies />} />
            <Route path=":query" element={<SearchedMovies />} />
          </Route>
          <Route
            path="library"
            element={
              <PrivateRoute component={<Library />} redirectTo="/login" />
            }
          >
            <Route index element={<LibraryIndex />} />
            <Route path="watched" element={<Watched />} />
            <Route path="queue" element={<Queue />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};
