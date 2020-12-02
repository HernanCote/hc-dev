import styled from 'styled-components';

import {
  Layout,
} from '../Hero';
import {
  H2,
  P,
} from '../Foundation';

import { getMediaMinWidth } from '../../utils';

const ServicesWrapper = styled(Layout)`
  max-width: 100vw;
  overflow: hidden;
  ${H2} {
    padding-bottom: 5rem;
  }

  ${P} {
    width: 100%;
    ${getMediaMinWidth('sm')} {
      width: 70%;
  }
    padding: 2rem 0 4rem 0;
  }
`;

const CardsWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${getMediaMinWidth('lg')} {
    justify-content: left;
  }
`;
const HideContainer = styled.div`
  overflow: hidden;
`;

export {
  ServicesWrapper,
  CardsWrapper,
  HideContainer,
};
