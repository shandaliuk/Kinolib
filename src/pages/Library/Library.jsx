import { Outlet } from 'react-router-dom';
import { LibraryHeader } from 'components/LibraryHeader/LibraryHeader';

export const Library = () => {
  return (
    <>
      <LibraryHeader />
      <Outlet />
    </>
  );
};
