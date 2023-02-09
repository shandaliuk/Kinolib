import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 8;
  color: var(--color-text-light);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;

export const LogoIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const LogoTitle = styled.span`
  display: none;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.17;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
