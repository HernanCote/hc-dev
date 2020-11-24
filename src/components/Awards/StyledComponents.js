import styled from 'styled-components';
import { getMediaMinWidth } from '../../utils';

const Root = styled.div`
  min-height: 80vh;
  display: block;
  margin: 2rem;
  justify-content: space-around;

  ${getMediaMinWidth('md')} {
    display: flex;
    align-items: center;
    margin: 5rem 10rem;
  }
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  Root,
};
