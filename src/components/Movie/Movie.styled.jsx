import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  display: block;
  padding: 20px;
  width: 280px;
  background-color: ${props => props.theme.colors.secondary};
  border: 2px solid ${props => props.theme.colors.tertiary};
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
    margin-bottom: 12px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
  border: 2px solid ${props => props.theme.colors.primary};
  object-position: center;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  color: ${props => props.theme.colors.card};

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
  color: ${props => props.theme.colors.primary};

  @media screen and (min-width: 768px) {
    line-height: 1.3;
  }
`;
