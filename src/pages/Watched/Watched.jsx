import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion, useScroll } from 'framer-motion';
import { selectAuthStatus } from 'redux/auth/selectors';
import { useGetUserMoviesQuery } from 'services/userMoviesApi/userMoviesApi';
import { Container } from 'components/Container/Container';
import { AbsentMovies } from 'components/AbsentMovies/AbsentMovies';
import { Movie } from 'components/Movie/Movie';
import { WatchedSection } from './Watched.styled';
import {
  HiddenTitle,
  MoviesList,
} from 'components/TrendingMovies/TrendingMovies.styled';

const Watched = () => {
  const [skip, setSkip] = useState(true);

  const user = useSelector(selectAuthStatus);

  const { data, error, isLoading } = useGetUserMoviesQuery(user, { skip });

  const { scrollYProgress } = useScroll();

  if (user && skip) {
    setSkip(false);
    return;
  }

  if (error) {
    toast.error("Can't load your watched movies");
    return;
  }

  return (
    <main>
      {!skip && !isLoading && !error && data.watched.length > 3 && (
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      )}
      <WatchedSection>
        <Container>
          {error && <p>Something went wrong :(</p>}
          {!skip && !isLoading && !error && (
            <>
              <HiddenTitle>Watched movies</HiddenTitle>
              {data.watched.length < 1 ? (
                <AbsentMovies location={'watched'} />
              ) : (
                <MoviesList>
                  {data.watched.map(movie => {
                    return (
                      <li key={movie.id}>
                        <Movie
                          id={movie.id}
                          title={movie.title}
                          poster={movie.poster}
                          date={movie.date}
                          genreIds={movie.genres.map(genre => genre.id)}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.5 }}
                          whileHover={{
                            scale: 1.08,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 1 }}
                        />
                      </li>
                    );
                  })}
                </MoviesList>
              )}
            </>
          )}
        </Container>
      </WatchedSection>
      <Outlet />
    </main>
  );
};

export default Watched;
