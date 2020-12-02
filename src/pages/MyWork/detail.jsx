import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  H2,
  Img,
} from '../../components/Foundation';
import Awards from '../../components/Awards';
import Loader from '../../components/Loader';

import {
  pageAnimation,
  fetchComponentData,
} from '../../utils';

import ScrollTop from '../../components/hocs/ScrollTop';
import Meta from '../../components/Meta';

const RootDetail = styled(motion.div)`
  color: ${({ theme }) => theme.colors.white};
`;

const HeadLine = styled.div`
  padding-top: 2rem;
  
  ${H2} {
    text-align: center;
    margin-bottom: 2rem;
  }

  ${Img} {
    width: 100%;
    height: 70%;
    object-fit: contain;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  margin-top: 4rem;
  ${Img} {
    width: 100%;
    height: 70%;
    object-fit: contain;
  }
`;

const MyWorkDetail = ({
  match,
}) => {
  const { slug } = match.params;

  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);

  const handleGetProjectData = async () => {
    const { data } = await fetchComponentData({
      endpoint: `/api/projects/${slug}`,
    });
    setIsLoading(false);
    setProject(data);
  };

  useEffect(() => {
    handleGetProjectData();
  }, [slug]);

  return (
    <>
      <Meta
        title={`Hernán Cote | My work - ${project?.title}`}
      />
      <ScrollTop />
      <RootDetail
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <>
          {!isLoading && (
            <>
              <HeadLine>
                <H2>{project?.title}</H2>
                <Img src={project?.mainImage} alt={project?.title} />
              </HeadLine>
              {project?.awards?.length > 0
                && (
                  <Awards
                    awards={project?.awards}
                  />
                )}
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
          {isLoading && <Loader type="Oval" />}
        </>
      </RootDetail>
    </>
  );
};

export default MyWorkDetail;
