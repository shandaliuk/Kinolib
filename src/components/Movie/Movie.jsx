import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { getGenres, getYear, normalizeTitle } from 'services/serviceApi';
import unavaliablePoster from 'images/unavailable-poster.jpg';
import { MovieLink, Image, MovieTitle, InfoWrapper } from './Movie.styled';

const SimpleMovie = forwardRef(({ id, title, poster, date, genreIds }, ref) => {
  return (
    <MovieLink to={`/movies/${id}`} ref={ref}>
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
});

export const Movie = motion(SimpleMovie);
