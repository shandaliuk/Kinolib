import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { useGetSingleMovieQuery } from 'services/moviesApi/moviesApi';
import sprite from 'images/sprite.svg';
import {
  ModalContent,
  Overlay,
  Info,
  ModalImage,
  ModalTitle,
  StatsWrapper,
  StatsNames,
  StatsValues,
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

  const handleClosure = () => {
    navigate('/trending');
  };

  const { data: movie, error, isLoading } = useGetSingleMovieQuery(id);

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
            <StatsWrapper>
              <StatsNames>
                <li>Vote / Votes</li>
                <li>Popularity</li>
                <li>Original Title</li>
                <li>Genre</li>
              </StatsNames>
              <StatsValues>
                <li>
                  <UserScore>{movie.vote_average.toFixed(1)}</UserScore>/{' '}
                  {movie.vote_count}
                </li>
                <li>{movie.popularity.toFixed(1)}</li>
                <li>{movie.original_title.toUpperCase()}</li>
                <li>{movie.genres.map(genre => genre.name).join(', ')}</li>
              </StatsValues>
            </StatsWrapper>
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
