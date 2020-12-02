import styled from 'styled-components';

import {
  H3,
  P,
} from '../Foundation';

import { getMediaMinWidth } from '../../utils';

const RootAward = styled.div`
  padding: 2rem 0;

  ${getMediaMinWidth('md')} {
    padding: 5rem;
    height: 20rem;
    max-width: 35rem;
    width: 100%;
  }

  ${H3} {
    font-size: 1.25rem;
  }

  ${P} {
    padding: 2rem 0;
  }
`;

const Line = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.colors.shamrock};
  height: 0.5rem;
  margin: 0.5rem 0;
`;

export {
  RootAward,
  Line,
};
