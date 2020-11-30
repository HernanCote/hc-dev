import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Root = styled.div`
  position: relative;
`;

const Spinner = styled(Loader)`
  position: absolute;
  left: 50%;
  top: 50%;
`;

export {
  Root,
  Spinner,
};
