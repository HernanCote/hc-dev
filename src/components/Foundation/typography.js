import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const h1Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.h1};
`;

const H1 = styled.h1`
  ${h1Styles};
`;

const MotionH1 = styled(motion.h1)`
  ${h1Styles};
`;

const h2Styles = css`
  font-weight: lighter;
  font-size: ${({ theme }) => theme.fontSizes.h2};
`;

const H2 = styled.h2`
  ${h2Styles};
`;

const MotionH2 = styled(motion.h2)`
  ${h2Styles};
`;

const h3Styles = css`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h3};
`;

const H3 = styled.h3`
  ${h3Styles};
`;

const MotionH3 = styled(motion.h3)`
  ${h3Styles};
`;

const h4Styles = css`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.h4};
`;

const H4 = styled.h4`
  ${h4Styles};
`;

const MotionH4 = styled(motion.h4)`
  ${h4Styles};
`;

const spanStyles = css`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shamrock};
`;

const Span = styled.span`
  ${spanStyles};
`;

const MotionSpan = styled(motion.span)`
  ${spanStyles};
`;

const A = styled.a`
  font-size: 1.1rem;
`;

const pStyles = css`
  padding: 3rem 0;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.4rem;
  line-height: 150%;
`;

const P = styled.p`
  ${pStyles};
`;

const MotionP = styled(motion.p)`
  ${pStyles};
`;

const Img = styled.img``;

export {
  Img,
  Span,
  H1,
  H2,
  H3,
  H4,
  P,
  A,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionH4,
  MotionSpan,
  MotionP,
};
