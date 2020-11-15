import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../../components/ProjectCard';

import projects from './data';

const Root = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;

const MyWork = () => (
  <Root>
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
