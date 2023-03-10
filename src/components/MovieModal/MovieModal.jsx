import Modal from 'react-modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { selectAuthStatus } from 'redux/auth/selectors';
import {
  useAddMovieMutation,
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

export const MovieModal = () => {
  const [skip, setSkip] = useState(true);

  const { movieId: id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const figurePath = () => {
    if (location.state?.from) {
      return location.state?.from;
    }
    if (location.pathname)
      return location.pathname.slice(0, location.pathname.indexOf('/', 10));
  };

  const handleClosure = () => {
    navigate(figurePath());
  };

  const { data: movie, error, isLoading } = useGetMovieDetailsQuery(id);

  const user = useSelector(selectAuthStatus);

  const { data: userMovies, isLoading: userLoading } = useGetUserMoviesQuery(
    user,
    { skip }
  );

  const [updateMovies] = useAddMovieMutation();

  if (user && skip) {
    setSkip(false);
  }

  const handleClick = async event => {
    if (event.target.name === 'watched') {
      try {
        if (userMovies.watched.find(userMovie => userMovie.id === movie.id)) {
          throw new Error();
        }
        await updateMovies({
          id: user,
          movie,
          location: 'watched',
        });
        toast.success('Added to your watched movies');
      } catch (error) {
        toast.error("Can't add to your watched movies");
      }
      return;
    }
    try {
      if (userMovies.queue.find(userMovie => userMovie.id === movie.id)) {
        throw new Error();
      }
      await updateMovies({ id: user, movie, location: 'queue' });
      toast.success('Added to your queue');
    } catch (error) {
      toast.error("Can't add to your queue");
    }
  };

  return (
    <>
      {error && <p>Something went wrong :(</p>}
      {isLoading && <ColorRing />}
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
                    name="watched"
                    onClick={handleClick}
                    disabled={true}
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
                    name="queue"
                    onClick={handleClick}
                    disabled={true}
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
