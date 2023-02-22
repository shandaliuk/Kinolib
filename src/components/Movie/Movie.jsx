import { Link } from 'react-router-dom';
import { getGenres, getYear, normalizeTitle } from 'services/serviceApi';
import { Image, MovieTitle, InfoWrapper } from './Movie.styled';

export const Movie = ({ id, title, poster, date, genreIds }) => {
  return (
    <Link to={`${id}`}>
      <Image
        src={
          poster
            ? `https://image.tmdb.org/t/p/w500${poster}`
            : 'https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg'
        }
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
