import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Faq from '../../components/Faq';

import {
  fetchComponentData,
  pageAnimation,
} from '../../utils';

import faqItems from './faqItemsMock';
import servicesData from './servicesData';
import ScrollTop from '../../components/hocs/ScrollTop';
import Meta from '../../components/Meta';
import SkillList from '../../components/SkillList';

const Root = styled(motion.div)``;

const About = () => {
  const [skills, setSkills] = useState([]);

  const handleGetSkillsData = async () => {
    const { data } = await fetchComponentData({
      endpoint: '/api/skills',
      mapper: d => ({ ...d }),
    });
    setSkills(data);
  };

  useEffect(() => {
    handleGetSkillsData();
  }, []);
  return (
    <>
      <Meta
        title="Hernán Cote | About"
      />
      <ScrollTop />
      <Root
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Hero />
        {servicesData && <Services services={servicesData} />}
        {skills.length > 0 && <SkillList skills={skills} />}
        {faqItems && <Faq faqs={faqItems} />}
      </Root>
    </>
  );
};

export default About;
