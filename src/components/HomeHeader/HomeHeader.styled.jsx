import styled from 'styled-components';

export const HeaderHome = styled.header`
  padding-top: 40px;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
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
