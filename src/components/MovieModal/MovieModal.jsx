import Modal from 'react-modal';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { useGetSingleMovieQuery } from 'services/moviesApi/moviesApi';
import sprite from 'images/sprite.svg';
import {
  ModalWrapper,
  ModalImage,
  ModalTitle,
  StatsWrapper,
  StatsNames,
  StatsValues,
  About,
  Overview,
  ModalButtonList,
  WatchedModalButton,
  QueueModalButton,
  CloseButton,
  CloseIcon,
} from './MovieModal.styled';

const customStyles = {
  content: {
    top: '20px',
    left: '20px',
    right: '20px',
    bottom: '38px',
    borderRadius: '0px',
    padding: '0px',
  },
};

export const MovieModal = () => {
  const [isModalOpened, setModalOpening] = useState(true);

  const { movieId: id } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  const handleOpening = () => {
    setModalOpening(true);
  };

  const handleClosure = () => {
    setModalOpening(false);
    navigate(location.state?.from && '/trending');
  };

  const { data: movie, error, isLoading } = useGetSingleMovieQuery(id);

  return (
    <>
      {error && <p>Something went wrong :(</p>}
      {isLoading && <ColorRing />}
      {!error && !isLoading && (
        <Modal
          isOpen={isModalOpened}
          onAfterOpen={handleOpening}
          onRequestClose={handleClosure}
          style={customStyles}
        >
          <ModalWrapper>
            <ModalImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Movie: ${movie.title}`}
            />
            <ModalTitle>{movie.title}</ModalTitle>
            <StatsWrapper>
              <StatsNames>
                <li>Vote / Votes</li>
                <li>Popularity</li>
                <li>Original Title</li>
                <li>Genre</li>
              </StatsNames>
              <StatsValues>
                <li>7.3 / 1260</li>
                <li>100.2</li>
                <li>A FISTFUL OF LEAD</li>
                <li>Western</li>
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
            <CloseButton type="button" onClick={handleClosure}>
              <CloseIcon>
                <use href={sprite + '#icon-close'}></use>
              </CloseIcon>
            </CloseButton>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};
