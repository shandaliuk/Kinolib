import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { TrendingMovies } from 'pages/TrendingMovies/TrendingMovies';
import { Library } from 'pages/Library/Library';
import { Watched } from './Watched/Watched';
import { Queue } from './Queue/Queue';
import { MovieModal } from './MovieModal/MovieModal';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="trending" element={<TrendingMovies />}>
          <Route path=":movieId" element={<MovieModal />} />
        </Route>
        <Route path="library" element={<Library />}>
          <Route path="watched" element={<Watched />} />
          <Route path="queue" element={<Queue />} />
        </Route>
      </Route>
    </Routes>
  );
};
