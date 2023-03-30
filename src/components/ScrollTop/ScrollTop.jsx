import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { ScrollButton } from './ScrollTop.styled';

export const ScrollTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  const handleClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <ScrollButton
          onClick={handleClick}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
        >
          <RxDoubleArrowUp />
        </ScrollButton>
      )}
    </AnimatePresence>
  );
};
