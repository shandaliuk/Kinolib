import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import { selectAuthStatus } from 'redux/auth/selectors';
import { useGetUserMoviesQuery } from 'services/userMoviesApi/userMoviesApi';
import { Container } from 'components/Container/Container';
import { Movie } from 'components/Movie/Movie';
import { Pagination } from 'components/Pagination/Pagination';
import { WatchedSection } from './Watched.styled';
import {
  HiddenTitle,
  MoviesList,
} from 'components/Movies/PopularMovies/PopularMovies.styled';

const Watched = () => {
  const [skip, setSkip] = useState(true);
  const [page, setPage] = useState(1);

  const user = useSelector(selectAuthStatus);

  const { data, error, isLoading } = useGetUserMoviesQuery(user, { skip });

  const handleClick = () => setPage(page => page + 1);

  if (user && skip) {
    setSkip(false);
    return;
  }

  if (error) {
    toast.error("Can't load your watched movies");
    return;
  }

  return (
    <main>
      <WatchedSection>
        <Container>
          {isLoading && <ColorRing />}
          {!skip && !isLoading && !error && (
            <>
              <HiddenTitle>Trending movies</HiddenTitle>
              <MoviesList>
                {error && <p>Something went wrong :(</p>}
                {isLoading && <ColorRing />}
                {!error &&
                  !isLoading &&
                  data.watched.map(movie => {
                    return (
                      <li key={movie.id}>
                        <Movie
                          id={movie.id}
                          title={movie.title}
                          poster={movie.poster}
                          date={movie.date}
                          genreIds={movie.genres.map(genre => genre.id)}
                        />
                      </li>
                    );
                  })}
              </MoviesList>
              <Pagination onClick={handleClick} page={page} />
            </>
          )}
        </Container>
      </WatchedSection>
      <Outlet />
    </main>
  );
};

export default Watched;
