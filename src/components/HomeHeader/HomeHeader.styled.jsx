import styled from 'styled-components';
import homeMobile from 'images/home-header-mobile.jpg';
import homeMobileRetina from 'images/home-header-mobile@2x.jpg';
import homeTablet from 'images/home-header-tablet.jpg';
import homeTabletRetina from 'images/home-header-tablet@2x.jpg';
import homeDesktop from 'images/home-header-desktop.jpg';
import homeDesktopRetina from 'images/home-header-desktop@2x.jpg';

export const HeaderHome = styled.header`
  padding-top: 40px;
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
    padding-bottom: 82px;

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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 51px;
  column-gap: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    column-gap: 40px;
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
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  outline: none;
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background: #ff6b02;
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 5px 10px 5px 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  border-bottom: 0.5px solid ${props => props.theme.colors.primary};
  transition: border-bottom ${props => props.theme.transitions.main};

  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }

  &:focus-within {
    border-bottom: 0.5px solid ${props => props.theme.colors.accent};
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  color: ${props => props.theme.colors.primary};
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
  color: ${props => props.theme.colors.primary};
  transition: color ${props => props.theme.transitions.main};
  outline: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const SearchIcon = styled.svg`
  width: 12px;
  height: 12px;
`;

export const ErrorText = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: ${props => props.theme.colors.error};

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    text-align: center;
  }
`;
