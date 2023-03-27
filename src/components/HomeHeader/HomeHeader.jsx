import { Container } from 'components/Container/Container';
import { HeaderNavigation } from 'components/HeaderNavigation/Navigation';
import { AuthButton } from 'components/AuthButton/AuthButton';
import { HeaderForm } from 'components/Form/Form';
import { HeaderHome, Wrapper } from './HomeHeader.styled';

export const HomeHeader = () => {
  return (
    <HeaderHome>
      <Container>
        <Wrapper>
          <HeaderNavigation />
          <AuthButton />
        </Wrapper>
        <HeaderForm />
      </Container>
    </HeaderHome>
  );
};
