import { Link, useLocation } from 'react-router-dom';
import { getGenres, getYear, normalizeTitle } from 'services/serviceApi';
import { Image, MovieTitle, InfoWrapper } from './Movie.styled';

export const Movie = ({ id, title, poster, date, genreIds }) => {
  const location = useLocation();

  return (
    <Link to={`${id}`} state={{ from: location }}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={`Movie: ${title}`}
      />
      <MovieTitle>{normalizeTitle(title)}</MovieTitle>
      <InfoWrapper>
        <ul>{getGenres(genreIds)} </ul>
        <p>&nbsp;| {getYear(date)}</p>
      </InfoWrapper>
    </Link>
  );
};
