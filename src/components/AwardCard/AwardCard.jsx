import React from 'react';

import {
  RootAward,
  Line,
} from './StyledComponents';
import {
  H3,
  P,
} from '../Foundation';

const AwardCard = ({
  title,
  description,
}) => (
  <RootAward>
    <H3>{title}</H3>
    <Line />
    <P>{description}</P>
  </RootAward>
);

export default AwardCard;
