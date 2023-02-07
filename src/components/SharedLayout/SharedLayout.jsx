import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Footer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <Footer>
        <Container>
          <p>
            © 2020 | All Rights Reserved | Developed with love by GoIT Students
          </p>
        </Container>
      </Footer>
    </>
  );
};
