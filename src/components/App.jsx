import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Movies } from './Movies/Movies';
import { MoviesHome } from './MoviesHome/MoviesHome';
import { TrendingMovies } from 'pages/TrendingMovies/TrendingMovies';
import { SearchedMovies } from './Movies/SearchedMovies/SearchedMovies';
import { Library } from 'pages/Library/Library';
import { Watched } from './Watched/Watched';
import { Queue } from './Queue/Queue';
import { Login } from 'LoginModal/LoginModal';
import { MovieModal } from './MovieModal/MovieModal';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<MoviesHome />} />
          <Route path="trending" element={<TrendingMovies />}>
            <Route path=":movieId" element={<MovieModal />} />
          </Route>
          <Route path=":query" element={<SearchedMovies />}>
            <Route path=":movieId" element={<MovieModal />} />
          </Route>
        </Route>
        <Route path="library" element={<Library />}>
          <Route path="watched" element={<Watched />} />
          <Route path="queue" element={<Queue />} />
        </Route>
      </Route>
    </Routes>
  );
};
