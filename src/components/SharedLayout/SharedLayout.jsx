import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
import { StyledToastContainer } from './SharedLayout.styled';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/selectors';

import { LoadingScreen } from 'components/LoadingScreen/LoadingScreen';

const SharedLayout = () => {
  const auth = useSelector(selectAuthStatus);

  return (
    <Suspense fallback={<LoadingScreen />}>
      {!auth && <LoadingScreen />}
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
