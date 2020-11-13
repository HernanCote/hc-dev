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

const Line = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  height: 0.2rem;
  margin: 2rem 0;
  width: 100%;
`;

const Question = styled.div`
  padding: 3rem 0;
  cursor: pointer;
`;

const Answer = styled.div`
  padding: 2rem 0;

  ${P} {
    padding: 1rem 0;
  }
`;

export {
  Answer,
  Question,
  Line,
  Root,
};
