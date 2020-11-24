import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  H2,
  Img,
} from '../../components/Foundation';
import Awards from '../../components/Awards';

import { pageAnimation } from '../../utils';

import data from './data';
import ScrollTop from '../../components/hocs/ScrollTop';

const RootDetail = styled(motion.div)`
  color: ${({ theme }) => theme.colors.white};
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  
  ${H2} {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  ${Img} {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  ${Img} {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const MyWorkDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;

  const [projects] = useState(data);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter(x => x.url === url)[0];
    setProject(currentProject);
  }, [url, projects]);

  return (
    <>
      <ScrollTop />
      <RootDetail
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        { project && (
        <>
          <HeadLine>
            <H2>{project?.title}</H2>
            <Img src={project?.mainImage} alt={project?.title} />
          </HeadLine>
          <Awards
            awards={project?.awards}
          />
          {project?.secondaryImage && (
            <ImageDisplay>
              <Img
                src={project.secondaryImage}
                alt={project.title}
              />
            </ImageDisplay>
          )}
        </>
        )}
      </RootDetail>
    </>
  );
};

export default MyWorkDetail;
