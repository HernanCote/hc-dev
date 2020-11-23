import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Faq from '../../components/Faq';

import { pageAnimation } from '../../utils';

import faqItems from './faqItemsMock';
import servicesData from './servicesData';

const Root = styled(motion.div)``;

const About = () => (
  <Root
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
  >
    <Hero />
    <Services services={servicesData} />
    <Faq faqs={faqItems} />
  </Root>
);

export default About;
