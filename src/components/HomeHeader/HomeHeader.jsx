import { Container } from 'components/Container/Container';
import sprite from 'images/sprite.svg';
import { HeaderNavigation } from 'components/HeaderNavigation/Navigation';
import {
  HeaderHome,
  SearchIcon,
  Wrapper,
  Form,
  Input,
  SubmitButton,
  ErrorText,
  LoginButton,
} from './HomeHeader.styled';

export const HomeHeader = () => {
  return (
    <HeaderHome>
      <Container>
        <Wrapper>
          <HeaderNavigation />
          <LoginButton type="button">Log in</LoginButton>
        </Wrapper>
        <Form>
          <Input type="text" placeholder="Movie search" name="query" />
          <SubmitButton type="submit">
            <SearchIcon>
              <use href={sprite + '#icon-search'}></use>
            </SearchIcon>
          </SubmitButton>
        </Form>
        <ErrorText>
          Search result not successful. Enter the correct movie name and try
          again.
        </ErrorText>
      </Container>
    </HeaderHome>
  );
};
