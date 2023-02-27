import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <ToastContainer
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
