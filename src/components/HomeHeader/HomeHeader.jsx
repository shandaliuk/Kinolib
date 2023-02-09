import { Container } from 'components/Container/Container';
import sprite from 'images/sprite.svg';
import { Logo } from 'components/Logo/Logo';
import {
  HeaderHome,
  SearchIcon,
  Navigation,
  NavigationLink,
  List,
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
          <Navigation>
            <Logo />
            <List>
              <li>
                <NavigationLink to="/">Home</NavigationLink>
              </li>
              <li>
                <NavigationLink to="library">My library</NavigationLink>
              </li>
            </List>
          </Navigation>
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
