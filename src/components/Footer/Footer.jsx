import { Container } from 'components/Container/Container';
import { PageFooter, FooterText, Author, AuthorLink } from './Footer.styled';

export const Footer = () => {
  return (
    <PageFooter>
      <Container>
        <FooterText>
          © 2023 | All Rights Reserved |{' '}
          <Author>
            Developed by{' '}
            <AuthorLink to="https://github.com/shandaliuk" target="_blank">
              shandaliuk
            </AuthorLink>
          </Author>
        </FooterText>
      </Container>
    </PageFooter>
  );
};
