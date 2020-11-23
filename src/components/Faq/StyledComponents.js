import styled from 'styled-components';

import {
  H2,
  P,
  Span,
} from '../Foundation';

import {
  Layout,
} from '../Hero';

const Root = styled(Layout)`
  display: block;

  ${Span} {
    display: block;
  }

  ${H2} {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  ${P} {
    font-weight: lighter;
  }
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  Root,
};
