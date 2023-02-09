import styled from 'styled-components';

export const HeaderLibrary = styled.header`
  padding-bottom: 62px;
  background-image: url('../images/library-header-mobile.jpg');

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(../images/library-header-mobile@2x.jpg);
  }

  @media screen and (min-width: 768px) {
    padding-top: 37px;
    padding-bottom: 60px;
    background-image: url(../images/library-header-tablet.jpg);

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(../images/library-header-tablet@2x.jpg);
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(../images/library-header-desktop.jpg);

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(../images/library-header-desktop@2x.jpg);
    }
  }
`;

// .header__wrapper {
//     display: flex;
//     align-items: center;
//     width: 100%;
//     margin-bottom: 49px;
//     column-gap: 15px;

//     &--library {
//       margin-bottom: 57px;

//       @media screen and (min-width: 768px) {
//         margin-bottom: 40px;
//         column-gap: 40px;
//       }
//     }

// &--queue {
//     padding: 14px 45px 12px 45px;

//     @media screen and (min-width: 768px) {
//       padding: 13px 57px;
//     }

//     @media screen and (min-width: 768px) {
//       padding: 13px 54px;
//     }
//   }
