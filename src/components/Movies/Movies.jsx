import { Outlet } from 'react-router-dom';
import { HomeHeader } from 'components/HomeHeader/HomeHeader';

export const Movies = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
};
