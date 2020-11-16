import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  H2,
  MotionH2,
  Img,
} from '../Foundation';

const Layout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  ${H2}, ${MotionH2} {
    font-weight: lighter;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;

  ${Img} {
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
