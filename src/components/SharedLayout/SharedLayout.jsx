import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
import { StyledToastContainer } from './SharedLayout.styled';
import { Suspense } from 'react';
import { LoadingScreen } from 'components/LoadingScreen/LoadingScreen';

const SharedLayout = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
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
    </Suspense>
  );
};

export default SharedLayout;
