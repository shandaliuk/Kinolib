import { Link } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import sprite from 'images/sprite.svg';
import { Header, Icon } from './HomeHeader.styled';

export const HomeHeader = () => {
  return (
    <Header>
      <Container>
        <Link to="/">
          <Icon>
            <use href={sprite + '#icon-film'}></use>
          </Icon>
        </Link>
      </Container>
    </Header>
  );
};
