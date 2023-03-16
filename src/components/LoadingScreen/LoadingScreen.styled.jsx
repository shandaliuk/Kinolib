import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Screen = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  z-index: 999;
  background-color: white;
`;
