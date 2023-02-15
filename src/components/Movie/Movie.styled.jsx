import styled from 'styled-components';

export const Image = styled.img`
  width: 280px;
  margin-bottom: 10px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
    margin-bottom: 12px;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  color: ${props => props.theme.colors.tertiary};

  @media screen and (min-width: 768px) {
    line-height: 1.3;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.colors.card};

  @media screen and (min-width: 768px) {
    line-height: 1.3;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;