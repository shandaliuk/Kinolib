import { Outlet, useSearchParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { useGetTrendingMoviesQuery } from 'services/moviesApi/moviesApi';
import { Container } from 'components/Container/Container';
import { Movie } from 'components/Movie/Movie';
import { Pagination } from 'components/Pagination/Pagination';
import { MoviesSection, HiddenTitle, MoviesList } from '../Movies.styled';

export const PopularMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');

  console.log(page);

  const { data: movies, error, isLoading } = useGetTrendingMoviesQuery(page);

  const handleClick = event =>
    setSearchParams({ page: event.nextSelectedPage + 1 });

  return (
    <main>
      <MoviesSection>
        <Container>
          {error && <p>Something went wrong :(</p>}
          {isLoading && <ColorRing />}
          {!isLoading && !error && (
            <>
              <HiddenTitle>Trending movies</HiddenTitle>
              <MoviesList>
                {error && <p>Something went wrong :(</p>}
                {isLoading && <ColorRing />}
                {!error &&
                  !isLoading &&
                  movies.results.map(result => {
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
              <Pagination onClick={handleClick} page={page} />
            </>
          )}
        </Container>
      </MoviesSection>
      <Outlet />
    </main>
  );
};
