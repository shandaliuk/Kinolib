import styled from 'styled-components';

export const PageFooter = styled.footer`
  padding: 30px 0;
  background-color: #f7f7f7;
  line-height: 1.19;
  text-align: center;
  color: #545454;

  @media screen and (min-width: 1280px) {
    padding: 30px 0 28px 0;
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  line-height: 1.14;
  color: ${props => props.theme.colors.footer};

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
