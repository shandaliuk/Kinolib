import styled from 'styled-components';

export const HeaderHome = styled.header`
  padding-top: 40px;
  padding-bottom: 92px;

  @media screen and (min-width: 768px) {
    padding-bottom: 82px;
  }
`;

/* .header.rejected {
  padding-bottom: 43px;
} */

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
