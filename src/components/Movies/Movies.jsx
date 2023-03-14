import { Outlet } from 'react-router-dom';
import { HomeHeader } from 'components/HomeHeader/HomeHeader';

const Movies = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
};

export default Movies;
