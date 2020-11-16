import React from 'react';

import AwardCard from '../AwardCard';
import { Root } from './StyledComponents';

const Awards = ({
  awards = [],
}) => (
  <Root>
    {awards.map(award => (
      <AwardCard
        key={award.title}
        {...award}
      />
    ))}
  </Root>
);

export default Awards;
