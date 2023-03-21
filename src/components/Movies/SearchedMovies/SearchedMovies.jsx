import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useSearchParams } from 'react-router-dom';
import { useIsPresent } from 'framer-motion';
import { motion } from 'framer-motion';
import { useGetMovieQuery } from 'services/moviesApi/moviesApi';
import { Container } from 'components/Container/Container';
import { Movie } from 'components/Movie/Movie';
import { Pagination } from 'components/Pagination/Pagination';
import {
  MoviesSection,
  HiddenTitle,
  MoviesList,
} from '../PopularMovies/PopularMovies.styled';

const SearchedMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('page')) {
      return;
    }
    setSearchParams({ page: 1 });
  }, [searchParams, setSearchParams]);

  const isPresent = useIsPresent();

  const { query } = useParams();

  const {
    data: movies,
    isLoading,
    error,
  } = useGetMovieQuery({ page: Number(searchParams.get('page')), query });

  const handleClick = event => {
    setSearchParams({ page: event.nextSelectedPage + 1 });
  };

  return (
    <>
      <main>
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
                </MoviesList>
                <Pagination
                  onClick={handleClick}
                  page={Number(searchParams.get('page'))}
                  pageCount={movies.total_pages}
                />
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
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </main>
    </>
  );
};

export default SearchedMovies;
