import React from 'react';
import { Link } from 'react-router-dom';

import Wave from '../Wave';
import {
  MotionButton,
  MotionH2,
  MotionP,
  Span,
  MotionImg,
} from '../Foundation';

import {
  Layout,
  Description,
  ImageWrapper,
  Title,
  HideWrapper,
} from './StyledComponents';

import {
  titleAnimation,
  fadeAnimation,
  photoAnimation,
} from '../../utils';

import me from '../../assets/img/me.jpg';

const Hero = () => (
  <Layout>
    <Wave />
    <Description>
      <Title>
        <HideWrapper>
          <MotionH2
            variants={titleAnimation}
          >
            Hello! My name is
          </MotionH2>
        </HideWrapper>
        <HideWrapper>
          <MotionH2
            variants={titleAnimation}
          ><Span>Hernán Cote</Span>
          </MotionH2>
        </HideWrapper>
        <HideWrapper>
          <MotionH2
            variants={titleAnimation}
          >
            Software Craftsman and Architect
          </MotionH2>
        </HideWrapper>
      </Title>
      <MotionP
        variants={fadeAnimation}
      >
        Contact me for any tech ideas you have. I am a professional with amazing skills.
      </MotionP>
      <Link to="/contact">
        <MotionButton
          type="button"
          variants={fadeAnimation}
        >
          Contact
        </MotionButton>
      </Link>
    </Description>
    <ImageWrapper className="image">
      <MotionImg
        variants={photoAnimation}
        src={me}
        alt="Huy with camera"
      />
    </ImageWrapper>
  </Layout>
);

export default Hero;
