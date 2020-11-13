import React from 'react';

import ServicesCard from '../ServicesCard/ServicesCard';
import {
  H2,
  Span,
  Img,
} from '../Foundation';
import {
  ServicesWrapper,
  CardsWrapper,
} from './StyledComponents';
import {
  Description,
  ImageWrapper,
} from '../Hero';

import code from '../../assets/img/code2.jpg';
import servicesData from './servicesData';

const Services = () => (
  <ServicesWrapper>
    <Description>
      <H2>High <Span>quality</Span> services</H2>
      <CardsWrapper>
        {servicesData.map(service => (
          <ServicesCard
            key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </CardsWrapper>
    </Description>
    <ImageWrapper>
      <Img src={code} alt="services" />
    </ImageWrapper>
  </ServicesWrapper>
);

export default Services;
