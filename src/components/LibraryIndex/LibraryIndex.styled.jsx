import styled from 'styled-components';
import font from 'images/font.jpg';

export const LibrarySection = styled.section`
  min-height: 100vh;
  padding-top: 230px;
  padding-bottom: 40px;
  background-image: url(${font});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
`;

export const LibraryTitle = styled.h2`
  max-width: 400px;
  display: block;
  margin: auto;
  padding: 10px;
  font-size: 30px;
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  text-shadow: ${props => props.theme.shadows.text};
  background-color: rgba(3, 10, 2, 0.5);
  box-shadow: ${props => props.theme.shadows.box};
`;
