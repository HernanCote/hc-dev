import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
  color: ${({ theme }) => theme.colors.blackened};
  min-height: 90vh;
  font-size: 0.75rem;

  ${getMediaMinWidth('md')} {
    font-size: 1rem;
    padding: 5rem 10rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.black};
  
  ${MotionH2} {
    font-size: 3rem;
  }

  ${getMediaMinWidth('md')} {
    ${MotionH2} {
      font-size: 4rem;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;

  background: ${({ theme }) => theme.colors.blackened};
  ${getMediaMinWidth('sm')} {
    width: 3rem;
    height: 3rem;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  ${H2} {
    font-size: 1.5rem;
    margin-left: 1rem;
    
    ${getMediaMinWidth('sm')} {
      margin: 2rem;
      font-size: 4rem;
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blackened};
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
          <H2>hernan.cote@outlook.com</H2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Link
            target="_blank"
            href="https://github.com/HernanCote/"
            style={{ marginRight: '1rem' }}
          >
            <FaGithub size="4rem" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/hernancote/"
          >
            <FaLinkedin size="4rem" />
          </Link>
        </Social>
      </Hide>
    </ContactRoot>
  </>
);

export default Contact;
