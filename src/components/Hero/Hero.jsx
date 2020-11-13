import React from 'react';

import {
  Button,
  H2,
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

const Hero = () => (
  <Layout>
    <Description>
      <Title>
        <HideWrapper className="hide">
          <H2>I work to make</H2>
        </HideWrapper>
        <HideWrapper className="hide">
          <H2>Your <Span>dreams</Span> come</H2>
        </HideWrapper>
        <HideWrapper className="hide">
          <H2>true.</H2>
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
