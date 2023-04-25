import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { parse, format } from 'date-fns';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/selectors';
import {
  useAddMovieMutation,
  useDeleteMovieMutation,
  useGetUserMoviesQuery,
} from 'services/userMoviesApi/userMoviesApi';
import { useGetMovieDetailsQuery } from 'services/moviesApi/moviesApi';
import { HomeHeader } from 'components/HomeHeader/HomeHeader';
import { Container } from 'components/Container/Container';
import {
  SelectedMovieSection,
  MovieWrapper,
  MovieImage,
  InfoWrapper,
  SelectedMovieTitle,
  SelectedMovieCompanies,
  SelectedMovieCompany,
  SelectedMovieCountries,
  SelectedMovieCountry,
  SelectedMovieGenres,
  SelectedMovieGenre,
  SelectedMovieOverviews,
  SelectedMovieReleaseDate,
  SelectedMovieRuntime,
  UserScore,
  Popularity,
  SelectedMoviePopularity,
  SelectedMovieScore,
  ModalButtonList,
  QueueModalButton,
  WatchedModalButton,
} from './SelectedMovies.styled';

export const SelectedMovie = () => {
  const params = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useGetMovieDetailsQuery(params.id);

  const [skip, setSkip] = useState(true);

  const user = useSelector(selectAuthStatus);

  const { data: userMovies, isLoading: userLoading } = useGetUserMoviesQuery(
    user,
    { skip }
  );

  const [addMovie] = useAddMovieMutation();

  const [deleteMovie] = useDeleteMovieMutation();

  if (user && skip) {
    setSkip(false);
  }

  const handleClick = async event => {
    const movieToSave = {
      id: movie.id,
      title: movie.title,
      genres: movie.genres,
      poster: movie.poster_path,
      date: movie.release_date,
    };

    switch (event.target.name) {
      case 'watched':
        try {
          if (userMovies.watched.find(userMovie => userMovie.id === movie.id)) {
            throw new Error();
          }
          await addMovie({
            id: user,
            movieToSave,
            location: 'watched',
          });
          toast.success('Added to your watched movies');
        } catch (error) {
          toast.error("Can't add to your watched movies");
        }
        break;
      case 'queue':
        try {
          if (userMovies.queue.find(userMovie => userMovie.id === movie.id)) {
            throw new Error();
          }
          await addMovie({ id: user, movieToSave, location: 'queue' });
          toast.success('Added to your queue');
        } catch (error) {
          toast.error("Can't add to your queue");
        }
        break;
      case 'inWatched':
        try {
          const currentMovie = userMovies.watched.find(
            userMovie => userMovie.id === movie.id
          );
          if (!currentMovie) {
            throw new Error();
          }
          await deleteMovie({ id: user, currentMovie, location: 'watched' });
          toast.success('Removed from your watched movies');
        } catch (error) {
          toast.error("Can't remove from your watched movies");
        }
        break;
      case 'inQueue':
        try {
          const currentMovie = userMovies.queue.find(
            userMovie => userMovie.id === movie.id
          );
          if (!currentMovie) {
            throw new Error();
          }
          await deleteMovie({ id: user, currentMovie, location: 'queue' });
          toast.success('Removed from your queue');
        } catch (error) {
          toast.error("Can't remove from your queue");
        }
        break;
      default:
        toast.error('Unknown operation');
    }
  };

  const getDate = date => {
    const normalDate = parse(date, 'yyyy-MM-dd', Date.now());
    return format(normalDate, 'dd MMMM yyyy');
  };

  return (
    !isLoading &&
    !isError && (
      <main>
        <HomeHeader />
        <SelectedMovieSection
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(3,10,2,1) 0%, rgba(3,10,2,0) 100%),
        linear-gradient(0deg, rgba(3,10,2,0) 0%, rgba(3,10,2,1) 100%),
        url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }}
        >
          <Container>
            <MovieWrapper>
              <MovieImage
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
              <InfoWrapper>
                <SelectedMovieTitle>{movie.title}</SelectedMovieTitle>
                <SelectedMovieReleaseDate>
                  {getDate(movie.release_date)}
                </SelectedMovieReleaseDate>
                <SelectedMovieCountries>
                  {movie.production_countries.map(country => (
                    <SelectedMovieCountry key={country.name}>
                      {country.name}
                    </SelectedMovieCountry>
                  ))}
                </SelectedMovieCountries>
                <SelectedMovieCompanies>
                  {movie.production_companies.map(company => (
                    <SelectedMovieCompany key={company.id}>
                      {company.name}
                    </SelectedMovieCompany>
                  ))}
                </SelectedMovieCompanies>
                <SelectedMovieGenres>
                  {movie.genres.map(genre => (
                    <SelectedMovieGenre key={genre.id}>
                      {genre.name}
                    </SelectedMovieGenre>
                  ))}
                </SelectedMovieGenres>
                <SelectedMovieOverviews>
                  {movie.overview}
                </SelectedMovieOverviews>
                <SelectedMovieScore>
                  Score: <UserScore> {movie.vote_average.toFixed(1)}</UserScore>{' '}
                  / {movie.vote_count}
                </SelectedMovieScore>
                <SelectedMoviePopularity>
                  Popularity:{' '}
                  <Popularity>{movie.popularity.toFixed(1)}</Popularity>
                </SelectedMoviePopularity>
                <SelectedMovieRuntime>{`${movie.runtime} minutes`}</SelectedMovieRuntime>
                <ModalButtonList>
                  <li>
                    {!skip &&
                    !userLoading &&
                    userMovies.watched.find(
                      userMovie => userMovie.id === movie.id
                    ) ? (
                      <WatchedModalButton
                        type="button"
                        name="inWatched"
                        onClick={handleClick}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 1 }}
                      >
                        In watched
                      </WatchedModalButton>
                    ) : (
                      <WatchedModalButton
                        type="button"
                        name="watched"
                        onClick={handleClick}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 1 }}
                      >
                        Add to watched
                      </WatchedModalButton>
                    )}
                  </li>
                  <li>
                    {!skip &&
                    !userLoading &&
                    userMovies.queue.find(
                      userMovie => userMovie.id === movie.id
                    ) ? (
                      <QueueModalButton
                        type="button"
                        name="inQueue"
                        onClick={handleClick}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 1 }}
                      >
                        In queue
                      </QueueModalButton>
                    ) : (
                      <QueueModalButton
                        type="button"
                        name="queue"
                        onClick={handleClick}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 1 }}
                      >
                        Add to queue
                      </QueueModalButton>
                    )}
                  </li>
                </ModalButtonList>
              </InfoWrapper>
            </MovieWrapper>
          </Container>
        </SelectedMovieSection>
      </main>
    )
  );
};
