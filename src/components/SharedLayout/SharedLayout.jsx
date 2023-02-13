import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
