import styled from 'styled-components';
import font from 'images/font.jpg';

export const SearchedSection = styled.section`
  padding-top: 230px;
  padding-bottom: 70px;
  background-image: url(${font});
  background-size: auto;
  background-repeat: no-repeat;
  background-attachment: scroll;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    background-size: contain;
    padding-top: 217px;
    padding-bottom: 90px;
  }
`;
