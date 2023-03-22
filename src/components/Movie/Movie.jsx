import { useState } from 'react';
import { getGenres, getYear, normalizeTitle } from 'services/serviceApi';
import MovieModal from 'components/MovieModal/MovieModal';
import unavaliablePoster from 'images/unavailable-poster.jpg';
import { MovieLink, Image, MovieTitle, InfoWrapper } from './Movie.styled';

export const Movie = ({ id, title, poster, date, genreIds }) => {
  const [isModalOpened, setModalOpening] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setModalOpening(state => !state);
  };

  const handleClosure = () => {
    setModalOpening(false);
  };

  return (
    <MovieLink to={`#`} onClick={handleClick}>
      <Image
        src={
          poster
            ? `https://image.tmdb.org/t/p/w500${poster}`
            : unavaliablePoster
        }
        alt={`Movie: ${title}`}
      />
      <MovieTitle>{normalizeTitle(title)}</MovieTitle>
      <InfoWrapper>
        <ul>{getGenres(genreIds)} </ul>
        <p>&nbsp;| {getYear(date)}</p>
      </InfoWrapper>
      {isModalOpened && (
        <MovieModal movieId={id} handleClosure={() => handleClick} />
      )}
    </MovieLink>
  );
};
