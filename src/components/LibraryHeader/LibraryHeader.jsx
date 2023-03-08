import { Container } from 'components/Container/Container';
import { HeaderNavigation } from 'components/HeaderNavigation/Navigation';
import { AuthButton } from 'AuthButton/AuthButton';
import {
  HeaderLibrary,
  LibraryWrapper,
  LinksList,
  WatchedLink,
  QueueLink,
} from './LibraryHeader.styled';

export const LibraryHeader = () => {
  return (
    <HeaderLibrary>
      <Container>
        <LibraryWrapper>
          <HeaderNavigation />
          <AuthButton />
        </LibraryWrapper>
        <LinksList>
          <li>
            <WatchedLink to="watched">Watched</WatchedLink>
          </li>
          <li>
            <QueueLink to="queue">Queue</QueueLink>
          </li>
        </LinksList>
      </Container>
    </HeaderLibrary>
  );
};
