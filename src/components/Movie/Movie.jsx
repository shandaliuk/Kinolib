import { genres } from 'services/moviesApi/genres.json';

export const Movie = ({ title, poster, date, genreIds }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={`Movie: ${title}`}
        width="150px"
      />
      <h2>{title}</h2>
      <p>{date}</p>
      <ul>{}</ul>
    </>
  );
};
