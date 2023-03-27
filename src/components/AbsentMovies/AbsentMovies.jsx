import {
  AbsentMoviesWrapper,
  AbsentMoviesTitle,
  AbsentMovieName,
} from './AbsentMovies.styled';

export const AbsentMovies = ({ location, query }) => {
  return (
    <AbsentMoviesWrapper>
      {location === 'searchedMovies' ? (
        <AbsentMoviesTitle>
          Unfortunately, movies by the name of{' '}
          <AbsentMovieName>{query}</AbsentMovieName> were not found.
        </AbsentMoviesTitle>
      ) : (
        <AbsentMoviesTitle>
          Your <AbsentMovieName>{location}</AbsentMovieName> list is empty.
        </AbsentMoviesTitle>
      )}
    </AbsentMoviesWrapper>
  );
};
