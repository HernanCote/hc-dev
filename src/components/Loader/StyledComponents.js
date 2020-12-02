import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Root = styled.div`
  position: relative;
`;

const Spinner = styled(Loader)`
  position: absolute;
  left: calc(50% - 3rem);
  top: 50%;
`;

export {
  Root,
  Spinner,
};
