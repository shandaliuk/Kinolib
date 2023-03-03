import { Logo } from 'components/Logo/Logo';
import { NavigationHeader, List, NavigationLink } from './Navigation.styled';

export const HeaderNavigation = () => {
  return (
    <NavigationHeader>
      <Logo />
      <List>
        <li>
          <NavigationLink to="/movies/trending">Trending</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/library">My library</NavigationLink>
        </li>
      </List>
    </NavigationHeader>
  );
};
