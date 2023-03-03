import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  padding: 30px 0;
  line-height: 1.19;
  text-align: center;
  background-color: transparent;
  text-shadow: ${props => props.theme.shadows.text};
  margin-top: auto;

  @media screen and (min-width: 1280px) {
    padding: 30px 0 28px 0;
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  line-height: 1.14;
  font-weight: 200;
  color: ${props => props.theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;

export const Author = styled.span`
  @media screen and (max-width: 767px) {
    display: block;
    line-height: 1.71;
  }
`;

export const AuthorLink = styled(Link)`
  color: ${props => props.theme.colors.accent};
`;
