import styled from 'styled-components';
import { getMediaMinWidth } from '../../utils';

import { P, H3 } from '../Foundation';

const SkillTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;

  ${H3} {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -0.3rem;
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
    bottom: -0.3rem;
    left: 50%;
    width: 0;
    height: 0.25rem;
    border-radius: 0 2px 2px 0;
    background-color: ${({ theme }) => theme.colors.shamrock};
    transition: 0.5s;
  }
`;

const SkillImage = styled.div``;

const Image = styled.img`
  position: relative;
  object-fit: contain;
  height: 7rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

const Description = styled(P)`
  font-size: 1.5rem;

  ${getMediaMinWidth('lg')} {
    font-size: 1.75rem;
  }
`;

const SkillBox = styled.div`
  padding: 1rem;
  color: #ddd;
  cursor: pointer;

  :hover ${Image} {
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
