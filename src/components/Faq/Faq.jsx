import React from 'react';

import {
  H2,
  H4,
  P,
  Span,
} from '../Foundation';
import {
  Answer,
  Question,
  Line,
  Root,
} from './StyledComponents';

const Faq = () => (
  <Root>
    <H2>
      Any questions?
      <Span>FAQ</Span>
    </H2>
    <Question>
      <H4>How Do I Start?</H4>
      <Answer>
        <P>Lorem ipsum dolor sit amet.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo?</P>
      </Answer>
      <Line />
    </Question>
    <Question>
      <H4>Daily Schedule</H4>
      <Answer>
        <P>Lorem ipsum dolor sit amet.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo?</P>
      </Answer>
      <Line />
    </Question>
    <Question>
      <H4>Different Payment Methods</H4>
      <Answer>
        <P>Lorem ipsum dolor sit amet.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo?</P>
      </Answer>
      <Line />
    </Question>
    <Question>
      <H4>What Products Do You Offer</H4>
      <Answer>
        <P>Lorem ipsum dolor sit amet.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo?</P>
      </Answer>
      <Line />
    </Question>
  </Root>
);

export default Faq;
