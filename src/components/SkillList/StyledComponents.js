import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getMediaMinWidth } from '../../utils';
import { H2 } from '../Foundation';

const Root = styled(motion.div)`
  padding: 0 5rem;
  user-select: none;

  ${getMediaMinWidth('sm')} {
    padding: 0 10rem;
  }
`;

const Title = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.whiteGray};
  position: relative;
  margin-bottom: 4rem;

  ${H2} {
    font-size: 3.5rem;
    line-height: 5.5rem;
    font-weight: 100;

    ${getMediaMinWidth('sm')} {
      font-size: 4rem;
    }
  }

  ::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 0.25rem;
    width: 13rem;
    background-color: ${({ theme }) => theme.colors.shamrock};
  }

  ${getMediaMinWidth('sm')} {
    ::after {
      width: 14.75rem;
    }
  }
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  align-items:center;
  text-align: center;
  grid-gap: 1rem;
  font-size: 1.2rem;

  ${getMediaMinWidth('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${getMediaMinWidth('md')} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export {
  Root,
  Title,
  Container,
};
