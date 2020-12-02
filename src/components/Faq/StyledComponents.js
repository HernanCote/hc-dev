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
  min-height: 0;
  display: block;
  overflow: hidden;

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

const HideContainer = styled.div`
  overflow: hidden;
`;

export {
  Root,
  HideContainer,
};
