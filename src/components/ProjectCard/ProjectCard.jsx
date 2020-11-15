import React from 'react';
import { Link } from 'react-router-dom';

import {
  H2,
  Img,
} from '../Foundation';

import {
  Root,
  Line,
} from './StyledComponents';

const ProjectCard = ({
  title,
  to,
  image,
}) => (
  <Root>
    <H2>{title}</H2>
    <Line />
    <Link to={to}>
      <Img src={image} alt={title} />
    </Link>
  </Root>
);

export default ProjectCard;
