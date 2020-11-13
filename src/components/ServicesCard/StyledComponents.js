import styled from 'styled-components';

import { H3 } from '../Foundation';

const IconWrapper = styled.div`
  ${H3} {
    margin-left: 1rem;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  
  ${IconWrapper} {
    display: flex;
    align-items: center;
  }
`;

export {
  Card,
  IconWrapper,
};
