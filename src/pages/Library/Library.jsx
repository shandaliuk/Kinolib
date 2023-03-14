import { Outlet } from 'react-router-dom';
import { LibraryHeader } from 'components/LibraryHeader/LibraryHeader';

const Library = () => {
  return (
    <>
      <LibraryHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Library;
