import React from 'react';
import logoImg from '../assets/logo_transparent.png';
import { motion } from 'framer-motion';

const Logo = ({ className = "h-12" }) => {
  return (
    <motion.div 
      className={`flex items-center select-none cursor-pointer ${className}`}
      animate={{ y: [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
    >
      <img src={logoImg} alt="Football Challenge Logo" className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
    </motion.div>
  );
};

export default Logo;
