import React from 'react';

import {
  H2,
  H4,
  P,
  Span,
} from '../Foundation';

const Faq = () => (
  <div className="faq">
    <H2>Any questions? <Span>FAQ</Span> </H2>
    <div className="question">
      <H4>How Do I Start?</H4>
      <div className="answer">
        <P>Lorem ipsum dolor sit amet.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo?</P>
      </div>
    </div>
    <div className="question">
      <H4>Daily Schedule</H4>
      <div className="answer">
        <P>Lorem ipsum dolor sit amet.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo?</P>
      </div>
    </div>
    <div className="question">
      <H4>Different Payment Methods</H4>
      <div className="answer">
        <P>Lorem ipsum dolor sit amet.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo?</P>
      </div>
    </div>
    <div className="question">
      <H4>What Products Do You Offer</H4>
      <div className="answer">
        <P>Lorem ipsum dolor sit amet.</P>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo?</P>
      </div>
    </div>
  </div>
);

export default Faq;
