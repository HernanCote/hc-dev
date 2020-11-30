import styled from 'styled-components';
import { getMediaMinWidth } from '../../utils';

const Root = styled.div`
  display: block;
  margin: 0 5rem;
  width: 100%;

  ${getMediaMinWidth('sm')} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  Root,
};
