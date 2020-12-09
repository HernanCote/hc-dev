import styled from 'styled-components';
import { getMediaMinWidth } from '../../utils';

import { P, H3 } from '../Foundation';

const SkillTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;

  ${H3} {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    right: 50%;
    width: 0;
    height: 0.25rem;
    border-radius: 2px 0 0 2px;
    background-color: ${({ theme }) => theme.colors.shamrock};
    transition: 0.5s;
  }

  ::before {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    width: 0;
    height: 0.25rem;
    border-radius: 0 2px 2px 0;
    background-color: ${({ theme }) => theme.colors.shamrock};
    transition: 0.5s;
  }
`;

const SkillImage = styled.div`
  position: relative;
  background-color: white;
  border-radius: 50%;
  transition: 0.5s;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background-color: rgba(100, 100, 100, 0.3);
    z-index: 1;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  position: relative;
  object-fit: contain;
  height: 7rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const Description = styled(P)`
  padding: 0;
  overflow: hidden;
  font-size: 1rem;
  padding-top: 0.5rem;

  ${getMediaMinWidth('xsm')} {
    font-size: 1.4rem;
  }

  ${getMediaMinWidth('lg')} {
    padding: 1rem 4rem;
  }
`;

const SkillBox = styled.div`
  padding: 1rem;
  color: #ddd;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem minmax(7rem, 10rem);

  :hover ${SkillImage} {
    transform: translateY(-10px);
  }

  :hover > ${SkillTitle} {
    ::after, 
    ::before {
      width: 35px;
    }
  }
`;

export {
  Description,
  SkillBox,
  SkillImage,
  SkillTitle,
  Image,
};
