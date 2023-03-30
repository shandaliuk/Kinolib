import { ParallaxText } from 'components/ParallaxText/ParallaxText';
import {
  LibrarySection,
  LibraryWrapper,
  LibraryIcon,
  LibraryMovieIcon,
} from './LibraryIndex.styled';

const LibraryIndex = () => {
  return (
    <>
      <LibrarySection>
        <LibraryWrapper>
          <ParallaxText baseVelocity={1}>
            <LibraryIcon />
            Welcome to your library!
          </ParallaxText>
          <ParallaxText baseVelocity={-1}>
            <LibraryMovieIcon />
            choose watched or queue section
          </ParallaxText>
        </LibraryWrapper>
      </LibrarySection>
    </>
  );
};

export default LibraryIndex;
