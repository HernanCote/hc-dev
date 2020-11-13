import React from 'react';
import styled from 'styled-components';

import {
  Button,
  H2,
  P,
  Span,
  Img,
} from '../Foundation';

import home1 from '../../assets/img/home1.png';

const HeroWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  ${H2} {
    font-weight: lighter;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;

  ${Img} {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Title = styled.div``;

const HideWrapper = styled.div`
  overflow: hidden;
`;

const AboutHero = () => (
  <HeroWrapper>
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
      <Img src={home1} alt="Huy with camera" />
    </ImageWrapper>
  </HeroWrapper>
);

export default AboutHero;
