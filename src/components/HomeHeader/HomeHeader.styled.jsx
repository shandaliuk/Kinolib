import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import homeMobile from 'images/home-header-mobile.jpg';
import homeMobileRetina from 'images/home-header-mobile@2x.jpg';
import homeTablet from 'images/home-header-tablet.jpg';
import homeTabletRetina from 'images/home-header-tablet@2x.jpg';
import homeDesktop from 'images/home-header-desktop.jpg';
import homeDesktopRetina from 'images/home-header-desktop@2x.jpg';

export const HeaderHome = styled.header`
  padding-top: 39px;
  padding-bottom: 92px;
  background-image: url(${homeMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${homeMobileRetina});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${homeTablet});
    padding-bottom: 80px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${homeTabletRetina});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${homeDesktop});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${homeDesktopRetina});
    }
  }
`;

/* .header.rejected {
  padding-bottom: 43px;
} */

export const Navigation = styled.nav`
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

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 49px;
  column-gap: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    column-gap: 40px;
  }
`;
export const Form = styled.form`
  display: flex;
  border-bottom: 0.5px solid var(--color-text-light);
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }

  &:focus-within {
    border-bottom: 0.5px solid var(--color-accent);
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  color: var(--color-text-light);
  outline: none;

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;
    color: #ffffff4f;
  }
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-text-light);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;
export const ErrorText = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: var(--color-error);

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    text-align: center;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-text-light);
  outline: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.current::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--color-error);
  }

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;

export const SearchIcon = styled.svg`
  width: 12px;
  height: 12px;
`;

export const HeaderButton = styled.button`
  padding: 14px 36px 12px 37px;
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-text-light);
  background-color: transparent;
  border: 1px solid var(--color-text-light);
  border-radius: 5px;
  outline: none;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #ff6b02;
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 48px;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 45px;
  }
`;

export const LoginButton = styled.button`
  padding: 5px;
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-text-light);
  background-color: transparent;
  border: 1px solid var(--color-text-light);
  border-radius: 5px;
  outline: none;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #ff6b02;
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 5px 10px 5px 10px;
  }
`;
