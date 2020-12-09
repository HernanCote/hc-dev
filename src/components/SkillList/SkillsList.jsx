import React from 'react';

import { HideContainer } from '../Services';
import Skill from '../Skill';
import {
  H2,
} from '../Foundation';

import {
  Root,
  Title,
  Container,
} from './StyledComponents';

const SkillList = ({
  skills = [],
}) => (
  <HideContainer>
    <Root>
      <Title>
        <H2>
          My skills
        </H2>
      </Title>
      <Container>
        {skills.map(skill => (
          <Skill key={skill.id} {...skill} />
        ))}
      </Container>
    </Root>
  </HideContainer>
);

export default SkillList;
