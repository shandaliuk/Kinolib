import styled from 'styled-components';

export const ModalContent = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 38px;
  padding: 48px 20px 48px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  outline: none;
  background: rgb(255, 255, 255);

  @media screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 704px;
    height: 552px;
    padding: 40px 66px 40px 36px;
    flex-direction: row;
    align-items: flex-start;
    column-gap: 68px;
  }

  @media screen and (min-width: 1280px) {
    width: 806px;
    height: 558px;
    padding: 40px 12px;
    column-gap: 16px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalImage = styled.img`
  width: 240px;
  border-radius: 5px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 264px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 375px;
    height: 478px;
  }
`;

export const Info = styled.div`
  @media screen and (max-width: 767px) {
    width: 240px;
  }
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
`;

export const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;
`;
