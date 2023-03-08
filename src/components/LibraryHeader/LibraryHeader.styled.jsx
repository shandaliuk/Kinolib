import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLibrary = styled.header`
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  padding-top: 39px;
  padding-bottom: 62px;
`;

export const LibraryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 61px;
  column-gap: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    column-gap: 40px;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const WatchedLink = styled(NavLink)`
  display: block;
  padding: 14px 36px 12px 37px;
  font-family: inherit;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  box-shadow: ${props => props.theme.shadows.box};
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accent};
    background: transparent;
  }

  &.active {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.secondary};
    border: 1px solid transparent;
    transition: background ${props => props.theme.transitions.main},
      border ${props => props.theme.transitions.main},
      color ${props => props.theme.transitions.main};

    &:hover,
    &:focus {
      border: 1px solid ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.accent};
      background: transparent;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 13px 48px;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 45px;
  }
`;

export const QueueLink = styled(NavLink)`
  display: block;
  padding: 14px 45px 12px 45px;
  font-family: inherit;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  box-shadow: ${props => props.theme.shadows.box};
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accent};
    background: transparent;
  }

  &.active {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.secondary};
    border: 1px solid transparent;
    transition: background ${props => props.theme.transitions.main},
      border ${props => props.theme.transitions.main},
      color ${props => props.theme.transitions.main};

    &:hover,
    &:focus {
      border: 1px solid ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.accent};
      background: transparent;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 13px 57px;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 54px;
  }
`;
