import { Container } from 'components/Container/Container';
import { HeroSection } from './Hero.styled';

export const Hero = ({ movie }) => {
  return (
    <HeroSection
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(3,10,2,1) 0%, rgba(3,10,2,0) 50%),
        linear-gradient(0deg, rgba(3,10,2,0) 50%, rgba(3,10,2,1) 100%),
        url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <Container></Container>
    </HeroSection>
  );
};
