import { useEffect, useRef } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import {
  motion,
  useIsPresent,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import { useParallax } from 'utils/Motion';
import { useGetTrendingMoviesQuery } from 'services/moviesApi/moviesApi';
import { Hero } from 'components/Hero/Hero';
import { Container } from 'components/Container/Container';
import { Movie } from 'components/Movie/Movie';
import { Pagination } from 'components/Pagination/Pagination';
import {
  MoviesSection,
  TrendingTitle,
  MoviesList,
} from './TrendingMovies.styled';

export const TrendingMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('page')) {
      return;
    }
    setSearchParams({ page: 1 });
  }, [searchParams, setSearchParams]);

  const isPresent = useIsPresent();

  const {
    data: movies,
    error,
    isLoading,
  } = useGetTrendingMoviesQuery(
    searchParams.get('page') ? searchParams.get('page') : 1
  );

  const handleClick = event => {
    setSearchParams({ page: event.nextSelectedPage + 1 });
    window.scroll(0, 0);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const ref = useRef(null);

  return (
    <>
      {error && <p>Something went wrong :(</p>}
      {!isLoading && !error && (
        <>
          <Hero movie={movies.results[0]} reference={ref} />
          <MoviesSection>
            <Container>
              <TrendingTitle ref={ref}>Trending movies</TrendingTitle>
              <MoviesList>
                {movies.results.map(result => {
                  return (
                    <li key={result.id}>
                      <Movie
                        id={result.id}
                        title={result.title}
                        poster={result.poster_path}
                        date={result.release_date}
                        genreIds={result.genre_ids}
                      />
                    </li>
                  );
                })}
              </MoviesList>
              <Pagination
                onClick={handleClick}
                page={Number(searchParams.get('page'))}
              />
            </Container>
          </MoviesSection>
        </>
      )}
      <Outlet />
      <motion.div className="progress" style={{ scaleX }} />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, ease: 'circOut' },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: 0.5, ease: 'circIn' },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
};
