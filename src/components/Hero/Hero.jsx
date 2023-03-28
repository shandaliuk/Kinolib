import { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { getGenres, getYear } from 'services/serviceApi';
import { useParallax } from 'utils/Motion';
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

export const Hero = ({ movie, ref }) => {
  const [isModalOpened, setModalOpening] = useState(false);

  const handleClick = () => setModalOpening(state => !state);

  const { scrollYProgress } = useScroll({ target: ref });
  console.log(useScroll({ target: ref }));
  const y = useParallax(scrollYProgress, 300);

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
          <ButtonMore type="button" onClick={handleClick}>
            More Info
          </ButtonMore>
        </InfoWrapper>
      </Container>
      {isModalOpened && (
        <MovieModal movieId={movie.id} handleClosure={handleClick} />
      )}
    </HeroSection>
  );
};
