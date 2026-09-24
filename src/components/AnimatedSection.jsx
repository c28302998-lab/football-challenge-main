import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = "", delay = 0, direction = "up" }) {
  const variants = {
    hidden: { 
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { 
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
