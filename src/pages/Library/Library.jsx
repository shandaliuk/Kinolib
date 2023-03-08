import { Outlet } from 'react-router-dom';
import { LibraryHeader } from 'components/LibraryHeader/LibraryHeader';
import { LibrarySection } from './Library.styled';

export const Library = () => {
  return (
    <>
      <LibraryHeader />
      <main>
        <LibrarySection>
          <Outlet />
        </LibrarySection>
      </main>
    </>
  );
};
