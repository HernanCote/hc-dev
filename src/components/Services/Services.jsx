import React from 'react';

import { useScroll } from '../hocs';
import ServicesCard from '../ServicesCard/ServicesCard';
import {
  H2,
  Span,
  MotionImg,
} from '../Foundation';
import {
  ServicesWrapper,
  CardsWrapper,
  HideContainer,
  ImageWrapper,
  Description,
} from './StyledComponents';

import code from '../../assets/img/code2.jpg';
import { scrollRevealAnimation } from '../../utils';

const Services = ({
  services = [],
}) => {
  const [element, controls] = useScroll();

  return (
    <HideContainer>
      <ServicesWrapper
        variants={scrollRevealAnimation}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <ImageWrapper>
          <MotionImg src={code} alt="services" />
        </ImageWrapper>
        <Description>
          <H2>High <Span>quality</Span> services</H2>
          <CardsWrapper>
            {services.map(service => (
              <ServicesCard
                key={service.title}
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </CardsWrapper>
        </Description>
      </ServicesWrapper>
    </HideContainer>
  );
};

export default Services;
