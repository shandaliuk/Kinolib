import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, useIsPresent } from 'framer-motion';
import { useGetTrendingMoviesQuery } from 'services/moviesApi/moviesApi';
import { Container } from 'components/Container/Container';
import { Movie } from 'components/Movie/Movie';
import { Pagination } from 'components/Pagination/Pagination';
import { MoviesSection, HiddenTitle, MoviesList } from './PopularMovies.styled';

export const PopularMovies = () => {
  const [page, setPage] = useState(1);

  const isPresent = useIsPresent();

  // const [searchParams, setSearchParams] = useSearchParams();

  const { data: movies, error, isLoading } = useGetTrendingMoviesQuery(page);

  const handleClick = () => setPage(page => page + 1);

  return (
    <>
      <MoviesSection>
        <Container>
          {error && <p>Something went wrong :(</p>}
          {!isLoading && !error && (
            <>
              <HiddenTitle>Trending movies</HiddenTitle>
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
                ;
              </MoviesList>
              <Pagination onClick={handleClick} page={page} />
            </>
          )}
        </Container>
      </MoviesSection>
      <Outlet />
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
