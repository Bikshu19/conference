import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => (
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3 }}
    style={{'color':'#141E46','fontWeight':'bold'}}
  >
Quantum AI <span style={{'color':'#141E46','fontWeight':'bold'}}>And</span>  Deep-<span style={{'color':'#141E46','fontWeight':'bold'}}>Tech</span>
  </motion.h1>
);

export default AnimatedText;
