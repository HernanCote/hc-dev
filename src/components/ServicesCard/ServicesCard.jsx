import React from 'react';

import {
  H3,
  Img,
  P,
} from '../Foundation';

import {
  Card,
  IconWrapper,
} from './StyledComponents';

const ServicesCard = ({
  title,
  icon,
  description,
}) => (
  <Card>
    <IconWrapper>
      <Img src={icon} alt={title} />
      <H3>{title}</H3>
    </IconWrapper>
    <P>{description}</P>
  </Card>
);

export default ServicesCard;
