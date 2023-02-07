import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Library } from 'pages/Library/Library';
import { Watched } from './Watched/Watched';
import { Queue } from './Queue/Queue';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/library" element={<Library />}>
          <Route path="watched" element={<Watched />} />
          <Route path="queue" element={<Queue />} />
        </Route>
      </Route>
    </Routes>
  );
};
