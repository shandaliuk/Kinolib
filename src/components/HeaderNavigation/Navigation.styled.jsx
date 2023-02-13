import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationHeader = styled.nav`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 15px;

  @media screen and (min-width: 768px) {
    column-gap: 40px;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  outline: none;
  transition: color ${props => props.theme.transitions.main};

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.colors.error};
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
