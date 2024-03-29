import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useIsPresent } from 'framer-motion';
import { motion } from 'framer-motion';
import { useGetMovieQuery } from 'services/moviesApi/moviesApi';
import { Container } from 'components/Container/Container';
import { AbsentMovies } from 'components/AbsentMovies/AbsentMovies';
import { Movie } from 'components/Movie/Movie';
import { Pagination } from 'components/Pagination/Pagination';
import {
  HiddenTitle,
  MoviesList,
} from '../TrendingMovies/TrendingMovies.styled';
import { SearchedSection } from './SearchedMovies.styled';

const SearchedMovies = ({ query }) => {
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
    isLoading,
    error,
  } = useGetMovieQuery({
    page: Number(searchParams.get('page') ? searchParams.get('page') : 1),
    query,
  });

  const handleClick = event => {
    setSearchParams({ query, page: event.nextSelectedPage + 1 });
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <SearchedSection>
        <Container>
          {error && <p>Something went wrong :(</p>}
          {!isLoading && !error && (
            <>
              <HiddenTitle>Movies by name {query}</HiddenTitle>
              {movies.results.length < 1 ? (
                <AbsentMovies location={'searchedMovies'} query={query} />
              ) : (
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
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.3 }}
                          whileHover={{
                            scale: 1.08,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 1 }}
                        />
                      </li>
                    );
                  })}
                </MoviesList>
              )}
              {movies.total_pages > 1 && (
                <Pagination
                  onClick={handleClick}
                  page={Number(searchParams.get('page'))}
                  pageCount={movies.total_pages}
                />
              )}
            </>
          )}
        </Container>
      </SearchedSection>
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
    </>
  );
};

export default SearchedMovies;
