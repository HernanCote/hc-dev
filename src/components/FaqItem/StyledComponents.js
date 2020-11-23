import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  P,
} from '../Foundation';

const Line = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  height: 0.2rem;
  margin: 2rem 0;
  width: 100%;
`;

const Question = styled(motion.div)`
  padding: 3rem 0;
  cursor: pointer;
`;

const Answer = styled.div`
  padding: 2rem 0;

  ${P} {
    padding: 1rem 0;
  }
`;

export {
  Line,
  Question,
  Answer,
};
