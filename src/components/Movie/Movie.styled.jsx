import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  display: block;
  position: relative;
  text-align: center;
  padding-bottom: 12px;
  border-bottom: 1px solid transparent;
  background-color: rgba(3, 10, 2, 0.5);
  box-shadow: ${props => props.theme.shadows.box};
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  transition: background-color ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main},
    box-shadow ${props => props.theme.transitions.main};
`;

export const Image = styled.img`
  height: 402px;
  width: 280px;
  margin-bottom: 10px;
  object-position: center;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 455px;
    width: 336px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    height: 574px;
    width: 394px;
    margin-bottom: 12px;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 200;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};

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
  justify-content: center;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.theme.colors.accent};

  @media screen and (min-width: 768px) {
    line-height: 1.3;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;
