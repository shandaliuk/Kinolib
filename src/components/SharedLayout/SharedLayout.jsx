import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
import { StyledToastContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <StyledToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </>
  );
};
