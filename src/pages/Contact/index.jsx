import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  pageAnimation,
} from '../../utils';

import ScrollTop from '../../components/hocs/ScrollTop';
import Meta from '../../components/Meta';
import ContactForm from '../../components/ContactForm';

const ContactRoot = styled(motion.div)`
  padding: 0;
  color: ${({ theme }) => theme.colors.blackened};
  min-height: 90vh;
`;

const Contact = () => (
  <>
    <Meta
      title="Hernán Cote | Contact"
      description="Contact Hernán Cote"
    />
    <ScrollTop />
    <ContactRoot
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <ContactForm />
    </ContactRoot>
  </>
);

export default Contact;
