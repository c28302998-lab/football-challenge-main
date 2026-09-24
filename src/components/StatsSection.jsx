import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedNumber = ({ value, duration = 2, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;

      const incrementTime = (duration * 1000) / end;
      
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

export default function StatsSection() {
  const stats = [
    { id: 1, value: 500, suffix: "+", label: "Воспитанников" },
    { id: 2, value: 35, suffix: "", label: "Проф. Тренеров" },
    { id: 3, value: 24, suffix: "", label: "Выигранных Кубков" },
    { id: 4, value: 10, suffix: "+", label: "Игроков в Про-клубах" }
  ];

  return (
    <section className="py-20 relative z-20 border-y border-neutral-800 bg-neutral-950">
      <div className="absolute inset-0 bg-emerald-900/5 opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-emerald-500/30 transition-colors group"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
