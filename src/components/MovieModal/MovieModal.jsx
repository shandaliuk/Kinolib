import Modal from 'react-modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectAuthStatus } from 'redux/auth/selectors';
import {
  useAddMovieMutation,
  useDeleteMovieMutation,
  useGetUserMoviesQuery,
} from 'services/userMoviesApi/userMoviesApi';
import { useGetMovieDetailsQuery } from 'services/moviesApi/moviesApi';
import sprite from 'images/sprite.svg';
import {
  ModalContent,
  Overlay,
  Info,
  ModalImage,
  ModalTitle,
  Table,
  TableName,
  TableValue,
  UserScore,
  About,
  Overview,
  ModalButtonList,
  WatchedModalButton,
  QueueModalButton,
  CloseButton,
  CloseIcon,
} from './MovieModal.styled';

const MovieModal = ({ movieId, handleClosure }) => {
  const [skip, setSkip] = useState(true);

  const { data: movie, error, isLoading } = useGetMovieDetailsQuery(movieId);

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
          if (
            !userMovies.watched.find(userMovie => userMovie.id === movie.id)
          ) {
            throw new Error();
          }
          await deleteMovie({ id: user, movieToSave, location: 'watched' });
          toast.success('Removed from your watched movies');
        } catch (error) {
          toast.error("Can't remove from your watched movies");
        }
        break;
      case 'inQueue':
        try {
          if (!userMovies.queue.find(userMovie => userMovie.id === movie.id)) {
            throw new Error();
          }
          await deleteMovie({ id: user, movieToSave, location: 'queue' });
          toast.success('Removed from your queue');
        } catch (error) {
          toast.error("Can't remove from your queue");
        }
        break;
      default:
        toast.error('Unknown operation');
    }
  };

  return (
    <>
      {error && <p>Something went wrong :(</p>}
      {!error && !isLoading && (
        <Modal
          isOpen={true}
          onRequestClose={handleClosure}
          className="_"
          overlayClassName="_"
          contentElement={(props, children) => (
            <ModalContent {...props}>{children}</ModalContent>
          )}
          overlayElement={(props, contentElement) => (
            <Overlay {...props}>{contentElement}</Overlay>
          )}
        >
          <ModalImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Movie: ${movie.title}`}
          />
          <Info>
            <ModalTitle>{movie.title}</ModalTitle>
            <Table>
              <tbody>
                <tr>
                  <TableName>Vote / Votes</TableName>
                  <TableValue>
                    {' '}
                    <UserScore>
                      {movie.vote_average.toFixed(1)}
                    </UserScore> / {movie.vote_count}
                  </TableValue>
                </tr>
                <tr>
                  <TableName>Popularity</TableName>
                  <TableValue>{movie.popularity.toFixed(1)}</TableValue>
                </tr>
                <tr>
                  <TableName>Original Title</TableName>
                  <TableValue>{movie.original_title.toUpperCase()}</TableValue>
                </tr>
                <tr>
                  <TableName>Genre</TableName>
                  <TableValue>
                    {movie.genres.map(genre => genre.name).join(', ')}
                  </TableValue>
                </tr>
              </tbody>
            </Table>
            <About>About</About>
            <Overview>{movie.overview}</Overview>
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
                  >
                    In watched
                  </WatchedModalButton>
                ) : (
                  <WatchedModalButton
                    type="button"
                    name="watched"
                    onClick={handleClick}
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
                  >
                    In queue
                  </QueueModalButton>
                ) : (
                  <QueueModalButton
                    type="button"
                    name="queue"
                    onClick={handleClick}
                  >
                    Add to queue
                  </QueueModalButton>
                )}
              </li>
            </ModalButtonList>
          </Info>
          <CloseButton type="button" onClick={handleClosure}>
            <CloseIcon>
              <use href={sprite + '#icon-close'}></use>
            </CloseIcon>
          </CloseButton>
        </Modal>
      )}
    </>
  );
};

export default MovieModal;
