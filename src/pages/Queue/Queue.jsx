import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectAuthStatus } from 'redux/auth/selectors';
import { useGetUserMoviesQuery } from 'services/userMoviesApi/userMoviesApi';
import { Container } from 'components/Container/Container';
import { AbsentMovies } from 'components/AbsentMovies/AbsentMovies';
import { Movie } from 'components/Movie/Movie';
import { QueueSection } from './Queue.styled';
import {
  HiddenTitle,
  MoviesList,
} from 'components/TrendingMovies/TrendingMovies.styled';

const Queue = () => {
  const [skip, setSkip] = useState(true);

  const user = useSelector(selectAuthStatus);

  const { data, error, isLoading } = useGetUserMoviesQuery(user, { skip });

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
      <QueueSection>
        <Container>
          {error && <p>Something went wrong :(</p>}
          {!skip && !isLoading && !error && (
            <>
              <HiddenTitle>Trending movies</HiddenTitle>
              {data.queue.length < 1 ? (
                <AbsentMovies location={'queue'} />
              ) : (
                <MoviesList>
                  {data.queue.map(movie => {
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
              )}
            </>
          )}
        </Container>
      </QueueSection>
      <Outlet />
    </main>
  );
};

export default Queue;
