import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import {
  H2,
  Span,
} from '../Foundation';

import {
  Root,
  HideContainer,
} from './StyledComponents';

import FaqItem from '../FaqItem';

const Faq = ({
  faqs = [],
}) => (
  <HideContainer>
    {faqs.length > 0 && (
      <Root>
        <H2>
          Any questions?
          <Span>FAQ</Span>
        </H2>
        <AnimateSharedLayout>
          {faqs.map(faq => (
            <FaqItem
              id={faq.id}
              {...faq}
            />
          ))}
        </AnimateSharedLayout>
      </Root>
    )}
  </HideContainer>
);

export default Faq;
