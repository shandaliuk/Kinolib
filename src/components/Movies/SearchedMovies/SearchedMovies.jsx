import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
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
  const isPresent = useIsPresent();

  const { query } = useParams();

  const [page, setPage] = useState(1);

  const { data: movies, isLoading, error } = useGetMovieQuery({ page, query });

  const handleClick = event => setPage(event.nextSelectedPage + 1);

  return (
    <>
      {' '}
      <main>
        <MoviesSection>
          <Container>
            {error && <p>Something went wrong :(</p>}
            {isLoading && <ColorRing />}
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
                  pageCount={movies.total_pages}
                />
              </>
            )}
          </Container>
        </MoviesSection>
        <Outlet />
      </main>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
};

export default SearchedMovies;
