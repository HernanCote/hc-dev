import React from 'react';
import { Link } from 'react-router-dom';

import {
  MotionH2,
  MotionImg,
} from '../Foundation';

import {
  Root,
  Line,
  HideContainer,
} from './StyledComponents';

import {
  fadeAnimation,
  photoAnimation,
  lineAnimation,
  scrollRevealAnimation,
} from '../../utils';

import { useScroll } from '../hocs';

const ProjectCard = ({
  title,
  to,
  image,
}) => {
  const [element, controls] = useScroll();
  return (
    <Root
      variants={scrollRevealAnimation}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <MotionH2
        variants={fadeAnimation}
      >
        {title}
      </MotionH2>
      <Line
        variants={lineAnimation}
      />
      <Link to={to}>
        <HideContainer>
          <MotionImg
            variants={photoAnimation}
            src={image}
            alt={title}
          />
        </HideContainer>
      </Link>
    </Root>
  );
};

export default ProjectCard;
