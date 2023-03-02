import { useLocation } from 'react-router-dom';
import { getGenres, getYear, normalizeTitle } from 'services/serviceApi';
import { MovieLink, Image, MovieTitle, InfoWrapper } from './Movie.styled';
import unavaliablePoster from 'images/unavailable-poster.jpg';

export const Movie = ({ id, title, poster, date, genreIds }) => {
  const location = useLocation();

  return (
    <MovieLink to={`${id}`} state={{ from: location }}>
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
    </MovieLink>
  );
};
