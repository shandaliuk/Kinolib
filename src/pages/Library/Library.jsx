import { Outlet } from 'react-router-dom';
import { useIsPresent } from 'framer-motion';
import { motion } from 'framer-motion';
import { LibraryHeader } from 'components/LibraryHeader/LibraryHeader';

const Library = () => {
  const isPresent = useIsPresent();

  return (
    <>
      <LibraryHeader />
      <main>
        <Outlet />
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: 'circOut' },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </main>
    </>
  );
};

export default Library;
