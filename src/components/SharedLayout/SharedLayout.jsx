import { Outlet } from 'react-router-dom';
import { Footer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <Footer>
        <p>
          © 2020 | All Rights Reserved | Developed with love by GoIT Students
        </p>
      </Footer>
    </>
  );
};
