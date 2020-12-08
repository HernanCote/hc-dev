import styled from 'styled-components';

import {
  H3,
  P,
} from '../Foundation';

import { getMediaMinWidth } from '../../utils';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  ${H3} {
    width: 100%;
    text-align: center;
    margin-left: 1rem;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem;

    ${getMediaMinWidth('md')} {
      max-width: 8rem;
    }
  }

  ${getMediaMinWidth('md')} {
    justify-content: flex-end;
  }
`;

const Card = styled.div`
  width: 70%;
  margin: 0;

  ${P} {
    width: 100%;
    text-align: center;
  }

  ${getMediaMinWidth('sm')} {
    width: 15rem;
    margin-left: 0;

    ${P} {
      text-align: center;
      width: 80%;
    }
  }

  ${getMediaMinWidth('lg')} {
    margin: 0 0 2rem 0;
    width: auto;

    ${P} {
      width: 20rem;
      text-align: right;
      margin: 0;
      padding: 1rem 0;
    }
  }
`;

export {
  Card,
  IconWrapper,
};
