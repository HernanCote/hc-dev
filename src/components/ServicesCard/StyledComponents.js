import styled from 'styled-components';

import {
  H3,
  P,
} from '../Foundation';

import { getMediaMinWidth } from '../../utils';

const IconWrapper = styled.div`
  ${H3} {
    width: 100%;
    margin-left: 1rem;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem;

    ${getMediaMinWidth('sm')} {
      width: auto;
    }
  }
`;

const Card = styled.div`
  width: 20rem;
  margin-left: 1rem;

  ${IconWrapper} {
    width: 100%;
    display: flex;
    align-items: center;
  }

  ${P} {
    width: 100%;
    text-align: center;
  }

  ${getMediaMinWidth('sm')} {
    width: 15rem;
    margin-left: 0;

    ${P} {
      text-align: left;
      width: 80%;
    }
  }
`;

export {
  Card,
  IconWrapper,
};
