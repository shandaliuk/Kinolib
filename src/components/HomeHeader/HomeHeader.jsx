import { Container } from 'components/Container/Container';
import { HeaderNavigation } from 'components/HeaderNavigation/Navigation';
import { HeaderForm } from 'components/Form/Form';
import { HeaderHome, Wrapper, LoginButton } from './HomeHeader.styled';

export const HomeHeader = () => {
  return (
    <HeaderHome>
      <Container>
        <Wrapper>
          <HeaderNavigation />
          <LoginButton type="button">Log in</LoginButton>
        </Wrapper>
        <HeaderForm />
      </Container>
    </HeaderHome>
  );
};
