import { Container } from 'components/Container/Container';
import { HeaderNavigation } from 'components/HeaderNavigation/Navigation';
import {} from 'components/HomeHeader/HomeHeader.styled';
import {
  HeaderLibrary,
  LibraryWrapper,
  ButtonList,
  WatchedButton,
  QueueButton,
} from './LibraryHeader.styled';

export const LibraryHeader = () => {
  return (
    <HeaderLibrary>
      <Container>
        <LibraryWrapper>
          <HeaderNavigation />
        </LibraryWrapper>
        <ButtonList>
          <li>
            <WatchedButton type="button">Watched</WatchedButton>
          </li>
          <li>
            <QueueButton type="button">Queue</QueueButton>
          </li>
        </ButtonList>
      </Container>
    </HeaderLibrary>
  );
};
