import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  H2,
  H3,
  Img,
  P,
} from '../../components/Foundation';

import data from './data';

const RootDetail = styled.div`
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

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
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

  const [projects, setProjects] = useState(data);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter(x => x.url === url)[0];
    setProject(currentProject);
  }, [url, projects]);

  return (
    <>
      { project && (
        <RootDetail>
          <HeadLine>
            <H2>{project.title}</H2>
            <Img src={project.mainImage} alt={project.title} />
          </HeadLine>
          <Awards>
            {project.awards.map(award => (
              <Award
                key={award.title}
                {...award}
              />
            ))}
          </Awards>
          {project.secondaryImage && (
          <ImageDisplay>
            <Img
              src={project.secondaryImage}
              alt={project.title}
            />
          </ImageDisplay>
          )}
        </RootDetail>
      )}
    </>
  );
};

const RootAward = styled.div`
  padding: 5rem;

  ${H3} {
    font-size: 1.25rem;
  }

  ${P} {
    padding: 2rem 0;
  }
`;

const Line = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.colors.shamrock};
  height: 0.5rem;
  margin: 1rem 0;
`;

const Award = ({
  title,
  description,
}) => (
  <RootAward>
    <H3>{title}</H3>
    <Line />
    <P>{description}</P>
  </RootAward>
);

export default MyWorkDetail;
