import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ProjectCard from '../../components/ProjectCard';

import projects from './data';

import { pageAnimation } from '../../utils';

const Root = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;

const MyWork = () => (
  <Root
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    style={{ background: '#fff' }}
  >
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
