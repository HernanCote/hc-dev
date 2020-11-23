import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  MotionH2,
  MotionImg,
} from '../Foundation';

const Root = styled(motion.div)`
  padding-bottom: 10rem;

  ${MotionH2} {
    padding: 1rem 0;
  }

  ${MotionImg} {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Line = styled(motion.div)`
  height: 0.5rem;
  background: ${({ theme }) => theme.colors.shamrock};
  margin-bottom: 3rem;
`;

const HideContainer = styled.div`
  overflow: hidden;
`;

export {
  Line,
  Root,
  HideContainer,
};
