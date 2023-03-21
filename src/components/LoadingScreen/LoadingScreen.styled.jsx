import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Screen = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.accent};
  z-index: 4;
`;
