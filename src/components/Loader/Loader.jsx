import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import {
  Root,
  Spinner,
} from './StyledComponents';

const Loader = ({
  type = 'Circles',
  color = '#23d997',
}) => (
  <Root>
    <Spinner
      type={type}
      color={color}
    />
  </Root>
);

export default Loader;
