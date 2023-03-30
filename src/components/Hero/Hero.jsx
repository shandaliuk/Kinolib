import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { getGenres, getYear } from 'services/serviceApi';
import { Container } from 'components/Container/Container';
import MovieModal from 'components/MovieModal/MovieModal';
import {
  HeroSection,
  InfoWrapper,
  MovieTitle,
  MovieData,
  StarIcon,
  Score,
  Rating,
  Dot,
  Overview,
  ButtonMore,
} from './Hero.styled';

export const Hero = ({ movie }) => {
  const [isModalOpened, setModalOpening] = useState(false);

  const handleClick = () => setModalOpening(state => !state);

  return (
    <HeroSection
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(3,10,2,1) 0%, rgba(3,10,2,0) 50%),
        linear-gradient(0deg, rgba(3,10,2,0) 50%, rgba(3,10,2,1) 100%),
        url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <Container>
        <InfoWrapper>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieData>
            <Rating>
              <StarIcon /> <Score>{movie.vote_average.toFixed(1)}</Score> /{' '}
              {movie.vote_count}
            </Rating>
            <p>
              <Dot>&#x2022;</Dot>
              {getGenres(movie.genre_ids)}
            </p>
            <p>
              <Dot>&#x2022;</Dot>
              {getYear(movie.release_date)}
            </p>
          </MovieData>
          <Overview>{movie.overview}</Overview>
          <ButtonMore
            type="button"
            onClick={handleClick}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 1 }}
          >
            More Info
          </ButtonMore>
        </InfoWrapper>
      </Container>
      <AnimatePresence>
        {isModalOpened && (
          <MovieModal
            movieId={movie.id}
            handleClosure={handleClick}
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
    </HeroSection>
  );
};
