import styled from 'styled-components';

import {
  H2,
  Img,
} from '../Foundation';

const Root = styled.div`
  padding-bottom: 10rem;

  ${H2} {
    padding: 1rem 0;
  }

  ${Img} {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Line = styled.div`
  height: 0.5rem;
  background: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 3rem;
`;

export {
  Line,
  Root,
};
