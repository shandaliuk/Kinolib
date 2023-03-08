import styled from 'styled-components';

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
