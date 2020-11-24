import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  H2,
  MotionH2,
  MotionImg,
  MotionButton,
} from '../Foundation';

import { getMediaMinWidth } from '../../utils';

const Layout = styled(motion.div)`
  display: block;
  min-height: 90vh;
  padding: 2rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  ${getMediaMinWidth('lg')} {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
  }
`;

const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding: 0;
  
  ${MotionButton} {
    margin: 2rem 0 5rem 0;
  }

  ${H2}, ${MotionH2} {
    font-weight: lighter;
  }

  ${getMediaMinWidth('lg')} {
    padding-right: 5rem;
  }
`;

const ImageWrapper = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;

  ${MotionImg} {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Title = styled(motion.div)``;

const HideWrapper = styled.div`
  overflow: hidden;
`;

export {
  Layout,
  Description,
  ImageWrapper,
  Title,
  HideWrapper,
};
