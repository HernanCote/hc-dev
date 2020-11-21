import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

const commonStyles = css`
font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 2px solid ${({ theme }) => theme.colors.shamrock};
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.shamrock};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Button = styled.button`
  ${commonStyles}
`;

const MotionButton = styled(motion.button)`
  ${commonStyles}
`;

export {
  Button,
  MotionButton,
};
