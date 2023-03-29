import { useState, forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getGenres, getYear, normalizeTitle } from 'services/serviceApi';
import MovieModal from 'components/MovieModal/MovieModal';
import unavaliablePoster from 'images/unavailable-poster.jpg';
import { MovieLink, Image, MovieTitle, InfoWrapper } from './Movie.styled';

const SimpleMovie = forwardRef(({ id, title, poster, date, genreIds }, ref) => {
  const [isModalOpened, setModalOpening] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setModalOpening(state => !state);
  };

  return (
    <MovieLink to={`#`} onClick={handleClick} ref={ref}>
      <Image
        src={
          poster
            ? `https://image.tmdb.org/t/p/w500${poster}`
            : unavaliablePoster
        }
        alt={`Movie: ${title}`}
      />
      <MovieTitle>{normalizeTitle(title)}</MovieTitle>
      <InfoWrapper>
        <ul>{getGenres(genreIds)} </ul>
        <p>&nbsp;| {getYear(date)}</p>
      </InfoWrapper>
      <AnimatePresence>
        {isModalOpened && (
          <MovieModal
            movieId={id}
            handleClosure={() => handleClick}
            key="modal"
            initial={{
              top: '-100%',
            }}
            animate={{ top: '50%' }}
            exit={{
              top: '-100%',
            }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </MovieLink>
  );
});

export const Movie = motion(SimpleMovie);
