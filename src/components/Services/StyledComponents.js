import styled from 'styled-components';

import { Layout } from '../Hero';
import {
  H2,
  P,
} from '../Foundation';

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
  display: flex;
  flex-wrap: wrap;
`;

export {
  ServicesWrapper,
  CardsWrapper,
};
