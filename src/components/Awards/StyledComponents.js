import styled from 'styled-components';
import { getMediaMinWidth } from '../../utils';

const Root = styled.div`
  display: block;
  padding: 0 2rem;
  width: 100%;

  ${getMediaMinWidth('md')} {
    padding: 0;
    margin: 0;
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
