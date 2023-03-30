import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoginButton = styled(motion.button)`
  padding: 5px;
  font-family: inherit;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  text-shadow: ${props => props.theme.shadows.text};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.secondary};
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 5px 10px 5px 10px;
  }
`;
