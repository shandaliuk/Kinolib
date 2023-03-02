import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${props => props.theme.colors.primary};
  transition: color ${props => props.theme.transitions.main};
  outline: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const LogoIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const LogoTitle = styled.span`
  display: none;
  font-weight: 100;
  font-size: 30px;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
