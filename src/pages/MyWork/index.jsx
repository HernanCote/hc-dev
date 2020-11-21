import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ProjectCard from '../../components/ProjectCard';

import projects from './data';

import {
  pageAnimation,
  sliderAnimation,
  sliderContainer,
} from '../../utils';

const Root = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;

const FramesContainer = styled(motion.div)``;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.shamrock};
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.hcGreen};
`;

const Frame3 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.hcBlue};
`;

const Frame4 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.hcLighterBlue};
`;

const MyWork = () => (
  <Root
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    style={{ background: '#fff' }}
  >
    <FramesContainer
      variants={sliderContainer}
    >
      <Frame1 variants={sliderAnimation} />
      <Frame2 variants={sliderAnimation} />
      <Frame3 variants={sliderAnimation} />
      <Frame4 variants={sliderAnimation} />
    </FramesContainer>
    {projects.map(project => (
      <ProjectCard
        key={project.title}
        title={project.title}
        image={project.mainImage}
        to={project.url}
      />
    ))}
  </Root>
);

export default MyWork;
