import { useState } from 'react';
import { getGenres, getYear, normalizeTitle } from 'services/serviceApi';
import { MovieModal } from 'components/Modal/Modal';
import { Image, MovieTitle, InfoWrapper } from './Movie.styled';

export const Movie = ({ title, poster, date, genreIds }) => {
  const [isModalOpened, setModalOpening] = useState(false);

  const handleOpening = event => {
    event.preventDefault();
    setModalOpening(true);
  };

  const handleClosure = () => setModalOpening(false);

  return (
    <a href="/" onClick={handleOpening}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={`Movie: ${title}`}
      />
      <MovieTitle>{normalizeTitle(title)}</MovieTitle>
      <InfoWrapper>
        <ul>{getGenres(genreIds)} </ul>
        <p>&nbsp;| {getYear(date)}</p>
      </InfoWrapper>
      {isModalOpened && (
        <MovieModal
          isOpened={isModalOpened}
          onOpening={handleOpening}
          onClosure={handleClosure}
        />
      )}
    </a>
  );
};
