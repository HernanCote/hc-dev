import React from 'react';

import {
  Button,
  H2,
  MotionH2,
  P,
  Span,
  Img,
} from '../Foundation';

import {
  Layout,
  Description,
  ImageWrapper,
  Title,
  HideWrapper,
} from './StyledComponents';

import me from '../../assets/img/me.jpg';

const titleAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};

const container = {
  hidden: { x: 100 },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      staggerChildren: 0.75,
    },
  },
};

const Hero = () => (
  <Layout>
    <Description>
      <Title
        initial="hidden"
        animate="show"
        variants={container}
      >
        <HideWrapper>
          <MotionH2
            variants={titleAnimation}
          >
            I work to make
          </MotionH2>
        </HideWrapper>
        <HideWrapper>
          <MotionH2
            variants={titleAnimation}
          >Your <Span>dreams</Span> come
          </MotionH2>
        </HideWrapper>
        <HideWrapper>
          <MotionH2
            variants={titleAnimation}
          >
            true.
          </MotionH2>
        </HideWrapper>
      </Title>
      <P>Contact me for any tech ideas you have. I am a professional with amazing skills.</P>
      <Button type="button">Contact</Button>
    </Description>
    <ImageWrapper className="image">
      <Img src={me} alt="Huy with camera" />
    </ImageWrapper>
  </Layout>
);

export default Hero;
