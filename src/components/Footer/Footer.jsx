import { Container } from 'components/Container/Container';
import { PageFooter, FooterText, Author } from './Footer.styled';

export const Footer = () => {
  return (
    <PageFooter>
      <Container>
        <FooterText>
          © 2023 | All Rights Reserved |{' '}
          <Author>Developed with love by GoIT Students</Author>
        </FooterText>
      </Container>
    </PageFooter>
  );
};
