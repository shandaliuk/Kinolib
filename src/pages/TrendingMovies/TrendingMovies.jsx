import { useIsPresent } from 'framer-motion';
import { motion } from 'framer-motion';
import { PopularMovies } from 'components/Movies/PopularMovies/PopularMovies';

const TrendingMovies = () => {
  const isPresent = useIsPresent();

  return (
    <main>
      <PopularMovies />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </main>
  );
};

export default TrendingMovies;
