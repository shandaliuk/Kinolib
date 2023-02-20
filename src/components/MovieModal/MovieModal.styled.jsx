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
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const StatsWrapper = styled.div`
  display: flex;
  column-gap: 39px;
  margin-bottom: 20px;
`;

export const StatsNames = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.secondary};
`;

export const StatsValues = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
`;

export const About = styled.h3`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
`;

export const Overview = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  margin-bottom: 20px;
`;

export const ModalButtonList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const WatchedModalButton = styled.button`
  width: 110px;
  padding: 5px 10px;
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.tertiary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.tertiary};
  border-radius: 5px;
  outline: none;
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 57px;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 54px;
  }
`;

export const QueueModalButton = styled.button`
  width: 110px;
  padding: 13px 0px;
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.tertiary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.tertiary};
  border-radius: 5px;
  outline: none;
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 57px;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 54px;
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
