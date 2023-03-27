import { useSelector } from 'react-redux';
import { Logo } from 'components/Logo/Logo';
import { NavigationHeader, List, NavigationLink } from './Navigation.styled';
import { selectAuthStatus } from 'redux/auth/selectors';

export const HeaderNavigation = () => {
  const isLoggedIn = useSelector(selectAuthStatus);

  return (
    <NavigationHeader>
      <Logo />
      <List>
        <li>
          <NavigationLink to="/movies">Trending</NavigationLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavigationLink to="/library">My library</NavigationLink>
          </li>
        )}
      </List>
    </NavigationHeader>
  );
};
