import React from 'react';
import { motion } from 'framer-motion';

import { pageAnimation } from '../../utils';

const Contact = () => (
  <motion.div
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    style={{ background: '#fff' }}
  >
    <h1>Contact</h1>
  </motion.div>
);

export default Contact;
