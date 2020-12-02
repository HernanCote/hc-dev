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

import { useScroll } from '../hocs';
import { scrollRevealAnimation } from '../../utils';

const Faq = ({
  faqs = [],
}) => {
  const [element, controls] = useScroll();

  return (
    <HideContainer>
      {faqs.length > 0 && (
      <Root
        variants={scrollRevealAnimation}
        animate={controls}
        initial="hidden"
        ref={element}
      >
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
};

export default Faq;
