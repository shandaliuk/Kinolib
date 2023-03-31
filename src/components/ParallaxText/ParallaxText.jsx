import { useRef } from 'react';
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { Parallax, Scroller, ParallaxSpan } from './ParallaxText.styled';

export const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, v => `${wrap(-15, -40, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <Parallax>
      <Scroller style={{ x }}>
        <ParallaxSpan>{children} </ParallaxSpan>
        <ParallaxSpan>{children} </ParallaxSpan>
        <ParallaxSpan>{children} </ParallaxSpan>
        <ParallaxSpan>{children} </ParallaxSpan>
      </Scroller>
    </Parallax>
  );
};
