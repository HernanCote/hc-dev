import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  MotionH2,
  H2,
} from '../../components/Foundation';

import {
  getMediaMinWidth,
  pageAnimation,
  titleAnimation,
} from '../../utils';
import ScrollTop from '../../components/hocs/ScrollTop';

const ContactRoot = styled(motion.div)`
  padding: 2rem;
  color: #353535;
  min-height: 90vh;
  font-size: 0.75rem;

  ${getMediaMinWidth('md')} {
    font-size: 1rem;
    padding: 5rem 10rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  ${H2} {
    margin: 2rem;
  }
`;

const Contact = () => (
  <>
    <ScrollTop />
    <ContactRoot
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <MotionH2
            variants={titleAnimation}
          >Get in touch.
          </MotionH2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <H2>Send me a message.</H2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <H2>Send an Email.</H2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <H2>My Social Media</H2>
        </Social>
      </Hide>
    </ContactRoot>
  </>
);

export default Contact;
