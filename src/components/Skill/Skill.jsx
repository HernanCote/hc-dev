import React from 'react';

import { H3 } from '../Foundation';
import {
  Description,
  SkillBox,
  SkillImage,
  SkillTitle,
  Image,
} from './StyledComponents';

const Skill = ({
  title,
  image,
  description,
}) => (
  <SkillBox>
    <SkillTitle>
      <SkillImage>
        <Image src={image} alt={title} />
      </SkillImage>
      <H3>{title}</H3>
    </SkillTitle>
    <Description>{description}</Description>
  </SkillBox>
);

export default Skill;
