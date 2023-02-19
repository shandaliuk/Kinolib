import Modal from 'react-modal';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { useGetSingleMovieQuery } from 'services/moviesApi/moviesApi';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Movie: ${movie.title}`}
            width={100}
          />
          <h2>{movie.title}</h2>
          <p>Vote / Votes</p>
          <p>Popularity</p>
          <p>Original Title</p>
          <p>Genre</p>
          <h3>About</h3>
          <p>{movie.overview}</p>
          <ul>
            <li>
              <button type="button">Add to watched</button>
            </li>
            <li>
              <button type="button">Add to queue</button>
            </li>
          </ul>
        </Modal>
      )}
    </>
  );
};
