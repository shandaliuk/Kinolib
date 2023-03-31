import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Parallax = styled.div`
  width: 100%;
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  align-self: start;
  flex-wrap: nowrap;
`;

export const Scroller = styled(motion.div)`
  font-weight: 100;
  text-transform: uppercase;
  font-size: 30px;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const ParallaxSpan = styled.span`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;
