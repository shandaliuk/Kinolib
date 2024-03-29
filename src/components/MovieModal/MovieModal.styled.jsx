import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalContent = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 552px;
  transform: translate(-50%, -50%);
  padding: 48px 20px 48px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  background-color: rgba(3, 10, 2, 0.85);
  border: 1px solid ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.box};
  overflow: scroll;

  @media screen and (min-width: 768px) {
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
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 264px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
    height: 468px;
  }
`;

export const Info = styled.div`
  @media screen and (max-width: 767px) {
    width: 240px;
  }
`;

export const ModalTitle = styled.h2`
  font-weight: 200;
  font-size: 20px;
  line-height: 1.15;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media screen and (max-width: 1280px) {
    font-size: 30px;
    line-height: 1.17;
  }
`;

export const Table = styled.table`
  border-spacing: 0 8px;
  margin-bottom: 20px;
`;

export const TableName = styled.td`
  vertical-align: top;
  min-width: 108px;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.accent};

  @media screen and (min-width: 1280px) {
    min-width: 152px;
  }
`;

export const TableValue = styled.td`
  font-size: 12px;
  line-height: 1.33;
  font-weight: 200;
`;

export const UserScore = styled.span`
  display: inline-block;
  width: 36px;
  height: 16px;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.accent};
  color: #030a02;
  text-align: center;
`;

export const About = styled.h3`
  margin-bottom: 8px;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
`;

export const Overview = styled.p`
  font-weight: 200;
  font-size: 12px;
  line-height: 1.67;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.accent};
`;

export const ModalButtonList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const WatchedModalButton = styled(motion.button)`
  width: 110px;
  padding: 5px 10px;
  font-family: inherit;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
    color: #030a02;
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    padding-top: 14px;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 136px;
    padding-top: 14px;
    padding-bottom: 12px;
  }
`;

export const QueueModalButton = styled(motion.button)`
  width: 110px;
  padding: 13px 0px;
  font-family: inherit;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
    color: #030a02;
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    padding-top: 14px;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 136px;
    padding-top: 14px;
    padding-bottom: 12px;
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
  color: ${props => props.theme.colors.primary};
  transition: color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;
`;
