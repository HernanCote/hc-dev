import styled from 'styled-components';

import { Layout } from '../Hero';
import {
  H2,
  P,
} from '../Foundation';
import { getMediaMinWidth } from '../../utils';

const ServicesWrapper = styled(Layout)`
  ${H2} {
    padding-bottom: 5rem;
  }

  ${P} {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const CardsWrapper = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${getMediaMinWidth('lg')} {
    justify-content: left;
  }
`;

export {
  ServicesWrapper,
  CardsWrapper,
};
