import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { useApp } from '../context/AppContext';
import { Trophy, Users, Award, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AnimatedNumber = ({ value, duration = 2, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;

      const timer = setInterval(() => {
        start += Math.ceil(end / (duration * 60)); // smooth increment
        if (start > end) start = end;
        setDisplayValue(start);
        if (start === end) clearInterval(timer);
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};

export default function Hero() {
  const { t, setIsTrialModalOpen, siteSettings } = useApp();

  const heroImage = siteSettings?.heroImage || "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1920&q=80";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950"></div>
        <div className="absolute inset-0 bg-radial from-emerald-600/10 via-transparent to-transparent"></div>
      </div>

      {/* Floating Animated Accent Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-600/15 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* UEFA Standard Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md shadow-lg shadow-emerald-950/50">
          <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
          <span>{t.hero.badge}</span>
        </motion.div>

        {/* Hero Logo Display */}
        <motion.div variants={itemVariants} className="mb-6 transform hover:scale-105 transition-transform duration-500">
          <Logo className="h-24 sm:h-32 md:h-40" />
        </motion.div>

        {/* Main Slogan */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-sans max-w-4xl leading-none">
          <span className="green-gradient-text drop-shadow-md">{t.hero.slogan}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
          {t.hero.subtext}
        </motion.p>

        {/* CTA Buttons Group */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <motion.button
            animate={{ scale: [1, 1.03, 1], boxShadow: ["0px 0px 0px rgba(16,185,129,0)", "0px 0px 25px rgba(16,185,129,0.6)", "0px 0px 0px rgba(16,185,129,0)"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsTrialModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-emerald-600 rounded-xl shadow-xl shadow-emerald-900/40 cursor-pointer group"
          >
            <span>{t.hero.ctaTrial}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 rounded-xl backdrop-blur-md cursor-pointer"
          >
            <span>{t.hero.ctaAbout}</span>
          </motion.a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
          <motion.div whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.4)" }} className="glass-panel p-5 rounded-2xl border border-neutral-800/80 text-center transition-colors group">
            <Users className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-black text-white font-mono group-hover:text-emerald-300 transition-colors">
              <AnimatedNumber value={250} suffix="+" />
            </div>
            <div className="text-xs text-gray-400 uppercase font-medium mt-1">{t.hero.statPlayers}</div>
          </motion.div>

          <motion.div whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.4)" }} className="glass-panel p-5 rounded-2xl border border-neutral-800/80 text-center transition-colors group">
            <Trophy className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-black text-white font-mono group-hover:text-emerald-300 transition-colors">
              <AnimatedNumber value={42} />
            </div>
            <div className="text-xs text-gray-400 uppercase font-medium mt-1">{t.hero.statTrophies}</div>
          </motion.div>

          <motion.div whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.4)" }} className="glass-panel p-5 rounded-2xl border border-neutral-800/80 text-center transition-colors group">
            <Award className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-black text-white font-mono group-hover:text-emerald-300 transition-colors">
              <AnimatedNumber value={8} />
            </div>
            <div className="text-xs text-gray-400 uppercase font-medium mt-1">{t.hero.statLicensedCoaches}</div>
          </motion.div>

          <motion.div whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.4)" }} className="glass-panel p-5 rounded-2xl border border-neutral-800/80 text-center transition-colors group">
            <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-black text-white font-mono group-hover:text-emerald-300 transition-colors">
              <AnimatedNumber value={18} />
            </div>
            <div className="text-xs text-gray-400 uppercase font-medium mt-1">{t.hero.statProContracts}</div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
