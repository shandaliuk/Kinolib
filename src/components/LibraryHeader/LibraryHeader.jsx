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
        <ButtonList class="header__list header__list--buttons">
          <li>
            <WatchedButton
              type="button"
              class="header__button js-watched-button"
            >
              Watched
            </WatchedButton>
          </li>
          <li>
            <QueueButton
              type="button"
              class="header__button header__button--queue js-queue-button"
            >
              Queue
            </QueueButton>
          </li>
        </ButtonList>
      </Container>
    </HeaderLibrary>
  );
};
