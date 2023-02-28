import styled from 'styled-components';

export const HeaderHome = styled.header`
  padding-top: 40px;
  padding-bottom: 92px;
  background-color: ${props => props.theme.colors.secondary};
  border: 2px solid ${props => props.theme.colors.tertiary};
  box-shadow: 0px 18px 0px -9px rgba(0, 0, 0, 1);

  @media screen and (min-width: 768px) {
    padding-bottom: 82px;
  }
`;

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
