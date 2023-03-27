import styled from 'styled-components';

export const AbsentMoviesWrapper = styled.div`
  padding: 20px;
  background-color: rgba(3, 10, 2, 0.85);
`;

export const AbsentMoviesTitle = styled.h2`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 100;
`;

export const AbsentMovieName = styled.span`
  color: ${props => props.theme.colors.accent};
`;
