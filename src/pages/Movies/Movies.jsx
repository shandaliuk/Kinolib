import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HomeHeader } from 'components/HomeHeader/HomeHeader';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import SearchedMovies from 'components/SearchedMovies/SearchedMovies';
import { useEffect } from 'react';

export const Movies = () => {
  const [query, setQuery] = useState(null);

  const [searchParams] = useSearchParams();

  useEffect(() => setQuery(searchParams.get('query')), [searchParams]);

  return (
    <>
      <HomeHeader />
      <main>
        {query ? <SearchedMovies query={query} /> : <TrendingMovies />}
      </main>
    </>
  );
};
