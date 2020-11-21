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
} from '../../utils';

const ProjectCard = ({
  title,
  to,
  image,
}) => (
  <Root>
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

export default ProjectCard;
