import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useGetTrendingMoviesQuery } from 'services/moviesApi/moviesApi';
import sprite from 'images/sprite.svg';
import { Container } from 'components/Container/Container';
import { Movie } from 'components/Movie/Movie';
import {
  MoviesSection,
  HiddenTitle,
  MoviesList,
  Pagination,
  PaginationIcon,
} from './TrendingMovies.styled';

export const PopularMovies = () => {
  const [page, setPage] = useState(1);

  const { data: movies, error, isLoading } = useGetTrendingMoviesQuery(page);

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
          <Pagination
            breakLabel="..."
            nextLabel={
              <PaginationIcon>
                <use href={sprite + '#icon-arrow-right'}></use>
              </PaginationIcon>
            }
            onPageChange={() => setPage(page => page + 1)}
            pageRangeDisplayed={2}
            pageCount={20}
            previousLabel={
              <PaginationIcon>
                <use href={sprite + '#icon-arrow-left'}></use>
              </PaginationIcon>
            }
            marginPagesDisplayed={1}
            renderOnZeroPageCount={null}
          />
        </Container>
      </MoviesSection>
    </main>
  );
};
