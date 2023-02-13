import { useGetTrendingMoviesQuery } from 'services/moviesApi/moviesApi';
import { Movie } from 'components/Movie/Movie';

export const PopularMovies = () => {
  const { data: movies, error, isLoading } = useGetTrendingMoviesQuery();

  return (
    <main>
      <h1>Trending movies</h1>
      <ul>
        {error && <p>Something went wrong</p>}
        {isLoading && <p>Loading...</p>}
        {!error &&
          !isLoading &&
          movies.results.map(result => {
            return (
              <li key={result.id}>
                <Movie
                  title={result.title}
                  poster={result.poster_path}
                  date={result.release_date}
                  genreIds={result.genre_ids}
                />
              </li>
            );
          })}
        )
      </ul>
    </main>
  );
};
