import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import ProjectCard from '../../components/ProjectCard';
import Loader from '../../components/Loader';

import {
  fetchComponentData,
  getMediaMinWidth,
  pageAnimation,
  sliderAnimation,
  sliderContainer,
} from '../../utils';
import ScrollTop from '../../components/hocs/ScrollTop';
import Meta from '../../components/Meta';

const Root = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem;

  ${getMediaMinWidth('lg')} {
    padding: 5rem 10rem;
  }
`;

const FramesContainer = styled(motion.div)``;

const Frame1 = styled(motion.div)`
  position: fixed;
  z-index: 2;
  left: 0;
  top: calc(10% - 1px);
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.hcLighterBlue};
`;
const Frame2 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.hcBlue};
`;

const Frame3 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.hcGreen};
`;

const Frame4 = styled(Frame1)`
  background: ${({ theme }) => theme.colors.shamrock};
`;

const ProjectCards = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  ${getMediaMinWidth('md')} {
    grid-template-columns: 50% 50%;
  }
`;

const MyWork = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const handleGetProjectsData = async () => {
    const { data } = await fetchComponentData({
      endpoint: '/api/projects',
      mapper: d => ({ ...d }),
    });
    setIsLoading(false);
    setProjects(data);
  };

  useEffect(() => {
    handleGetProjectsData();
  }, []);

  return (
    <>
      <Meta
        title="Hernán Cote | My Work"
        description="Take a look at the projects I had carried on!"
      />
      <ScrollTop />
      <Root
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ background: '#fff' }}
      >
        <FramesContainer variants={sliderContainer}>
          <Frame1 variants={sliderAnimation} />
          <Frame2 variants={sliderAnimation} />
          <Frame3 variants={sliderAnimation} />
          <Frame4 variants={sliderAnimation} />
        </FramesContainer>
        <ProjectCards>
          {!isLoading && projects.map(project => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.thumbnail}
              to={project.url}
            />
          ))}
        </ProjectCards>
        {isLoading && <Loader type="Oval" />}
      </Root>
    </>
  );
};

export default MyWork;
