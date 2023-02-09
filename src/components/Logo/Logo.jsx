import { LogoLink, LogoIcon, LogoTitle } from './Logo.styled';
import sprite from 'images/sprite.svg';

export const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoIcon>
        <use href={sprite + '#icon-film'}></use>
      </LogoIcon>
      <LogoTitle>Filmoteka</LogoTitle>
    </LogoLink>
  );
};
