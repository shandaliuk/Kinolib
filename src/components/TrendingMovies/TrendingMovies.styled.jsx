import styled from 'styled-components';
import font from 'images/font.jpg';

export const MoviesSection = styled.section`
  padding-top: 130px;
  padding-bottom: 70px;
  background-image: url(${font});
  background-size: auto;
  background-repeat: no-repeat;
  background-attachment: scroll;
  min-height: 200vh;

  @media screen and (min-width: 768px) {
    background-size: contain;
    padding-top: 117px;
    padding-bottom: 90px;
  }
`;

export const TrendingTitle = styled.h1`
  font-size: 50px;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 50px;
`;

export const HiddenTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 16px;
  }
`;
