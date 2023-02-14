import { getGenres, getYear } from 'services/serviceApi';
import { Image, MovieTitle, InfoWrapper } from './Movie.styled';

export const Movie = ({ title, poster, date, genreIds }) => {
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={`Movie: ${title}`}
      />
      <MovieTitle>{title}</MovieTitle>
      <InfoWrapper>
        <ul>{getGenres(genreIds)} </ul>
        <p>&nbsp;| {getYear(date)}</p>
      </InfoWrapper>
    </>
  );
};
