import { useIsPresent } from 'framer-motion';
import { motion } from 'framer-motion';
import { Screen } from './LoadingScreen.styled';

export const LoadingScreen = () => {
  const isPresent = useIsPresent();

  return (
    <>
      <Screen />
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
    </>
  );
};
