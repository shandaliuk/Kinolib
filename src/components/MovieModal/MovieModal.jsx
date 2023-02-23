import Modal from 'react-modal';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
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
  const { movieId: id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const path = location.pathname.slice(0, location.pathname.indexOf('/', 8));

  const handleClosure = () => {
    navigate(path);
  };

  const { data: movie, error, isLoading } = useGetMovieDetailsQuery(id);

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
                    <UserScore>{movie.vote_average.toFixed(1)}</UserScore>/{' '}
                    {movie.vote_count}
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
                <WatchedModalButton type="button">
                  Add to watched
                </WatchedModalButton>
              </li>
              <li>
                <QueueModalButton type="button">Add to queue</QueueModalButton>
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

// Test
