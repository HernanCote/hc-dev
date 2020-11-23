import React, { useState } from 'react';

import {
  MotionH4,
  P,
} from '../Foundation';

import {
  Question,
  Answer,
  Line,
} from './StyledComponents';

const FaqItem = ({
  title,
  description,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Question
      onClick={() => setToggle(!toggle)}
      layout
    >
      <MotionH4 layout>{title}</MotionH4>
      {toggle && (
        <Answer>
          <P>{description}</P>
        </Answer>
      )}
      <Line />
    </Question>
  );
};

export default FaqItem;
