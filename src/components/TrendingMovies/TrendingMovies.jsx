import { ColorRing } from 'react-loader-spinner';
import { useGetTrendingMoviesQuery } from 'services/moviesApi/moviesApi';
import { Container } from 'components/Container/Container';
import { Movie } from 'components/Movie/Movie';
import {
  MoviesSection,
  HiddenTitle,
  MoviesList,
} from './TrendingMovies.styled';

export const PopularMovies = () => {
  const { data: movies, error, isLoading } = useGetTrendingMoviesQuery();

  return (
    <main>
      <MoviesSection>
        <Container>
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
                      title={result.title}
                      poster={result.poster_path}
                      date={result.release_date}
                      genreIds={result.genre_ids}
                    />
                  </li>
                );
              })}
          </MoviesList>
        </Container>
      </MoviesSection>
    </main>
  );
};
