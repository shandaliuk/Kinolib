import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Movies = lazy(() => import('components/Movies/Movies'));
const MoviesHome = lazy(() => import('components/MoviesHome/MoviesHome'));
const TrendingMovies = lazy(() =>
  import('pages/TrendingMovies/TrendingMovies')
);
const SearchedMovies = lazy(() =>
  import('components/Movies/SearchedMovies/SearchedMovies')
);
const Library = lazy(() => import('pages/Library/Library'));
const LibraryIndex = lazy(() => import('components/LibraryIndex/LibraryIndex'));
const Watched = lazy(() => import('pages/Watched/Watched'));
const Queue = lazy(() => import('pages/Queue/Queue'));
const MovieModal = lazy(() => import('components/MovieModal/MovieModal'));
const Error = lazy(() => import('pages/Error/Error'));

export const App = () => {
  return (
    <Suspense fallback={<ColorRing />}>
      <Routes>
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
            <Route path="trending" element={<TrendingMovies />}>
              <Route path=":movieId" element={<MovieModal />} />
            </Route>
            <Route path=":query" element={<SearchedMovies />}>
              <Route path=":movieId" element={<MovieModal />} />
            </Route>
          </Route>
          <Route
            path="library"
            element={
              <PrivateRoute component={<Library />} redirectTo="/login" />
            }
          >
            <Route index element={<LibraryIndex />} />
            <Route path="watched" element={<Watched />}>
              <Route path=":movieId" element={<MovieModal />} />
            </Route>
            <Route path="queue" element={<Queue />}>
              <Route path=":movieId" element={<MovieModal />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};
