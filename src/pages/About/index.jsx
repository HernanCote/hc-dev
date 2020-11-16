import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Faq from '../../components/Faq';

import { pageAnimation } from '../../utils';

const Root = styled(motion.div)``;

const About = () => (
  <Root
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
  >
    <Hero />
    <Services />
    <Faq />
  </Root>
);

export default About;
