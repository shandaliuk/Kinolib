import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ScrollButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 60px;
  height: 60px;
  font-size: 30px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: border ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accent};
  }
`;
