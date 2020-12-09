import styled from 'styled-components';

import {
  Layout,
  ImageWrapper as BaseImageWrapper,
  Description as BaseDescription,
} from '../Hero';
import {
  H2,
} from '../Foundation';

import { getMediaMinWidth } from '../../utils';

const ServicesWrapper = styled(Layout)`
  max-width: 100vw;
  text-align: center;
  overflow: hidden;
  ${H2} {
    padding-bottom: 5rem;
  }

  ${getMediaMinWidth('lg')} {
    text-align: end;
  }
`;

const Description = styled(BaseDescription)`
  justify-content: flex-end;
  ${getMediaMinWidth('lg')} {
    padding-right: 0;
    padding-left: 5rem;
  }
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  justify-items: center;

  ${getMediaMinWidth('sm')} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${getMediaMinWidth('lg')} {
    grid-template-columns: repeat(2, 1fr);
    justify-items: end;
    justify-content: end;
  }
`;

const ImageWrapper = styled(BaseImageWrapper)`
  display: none;
  ${getMediaMinWidth('lg')} {
    display: block;
  }
`;

const HideContainer = styled.div`
  overflow: hidden;
`;

export {
  ServicesWrapper,
  CardsWrapper,
  HideContainer,
  ImageWrapper,
  Description,
};
