import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      // Re-enable scroll
      document.body.style.overflow = 'unset';
    }, 2500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-neutral-950 flex flex-col items-center justify-center"
        >
          {/* Heartbeat Logo */}
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              filter: ["brightness(1) drop-shadow(0px 0px 0px rgba(16,185,129,0))", "brightness(1.2) drop-shadow(0px 0px 30px rgba(16,185,129,0.5))", "brightness(1) drop-shadow(0px 0px 0px rgba(16,185,129,0))"]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Logo className="h-24 sm:h-32 text-emerald-500" />
          </motion.div>
          
          {/* Glowing Loading Bar */}
          <div className="mt-12 w-64 h-[2px] bg-neutral-900 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.3, ease: "easeOut" }}
              className="absolute top-0 bottom-0 left-0 right-0 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)] rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
