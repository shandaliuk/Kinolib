import styled from 'styled-components';
import libraryMobile from 'images/library-header-mobile.jpg';
import libraryMobileRetina from 'images/library-header-mobile@2x.jpg';
import libraryTablet from 'images/library-header-tablet.jpg';
import libraryTabletRetina from 'images/library-header-tablet@2x.jpg';
import libraryDesktop from 'images/library-header-desktop.jpg';
import libraryDesktopRetina from 'images/library-header-desktop@2x.jpg';

export const HeaderLibrary = styled.header`
  position: relative;
  padding-top: 39px;
  padding-bottom: 62px;
  background-image: url(${libraryMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${libraryMobileRetina});
  }

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
    background-image: url(${libraryTablet});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${libraryTabletRetina});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${libraryDesktop});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${libraryDesktopRetina});
    }
  }
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

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const WatchedButton = styled.button`
  padding: 14px 36px 12px 37px;
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
    background: ${props => props.theme.colors.accent};
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 48px;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 45px;
  }
`;

export const QueueButton = styled.button`
  padding: 14px 45px 12px 45px;
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
    background: ${props => props.theme.colors.accent};
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 57px;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 54px;
  }
`;
