import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Target, Award, Users, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const { t, coaches, partners, siteSettings } = useApp();
  const aboutImage = siteSettings?.aboutImage || "https://images.unsplash.com/photo-1574629810360-7efbb19255cb?auto=format&fit=crop&w=1920&q=80";

  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden">
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url('${aboutImage}')` }}
      ></div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-900/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
            FOOTBALL CHALLENGE ACADEMY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            {siteSettings.aboutTitle || t.about.title}
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            {siteSettings.aboutSubtitle || t.about.subtitle}
          </p>
        </div>

        {/* Content Layout: Timeline on Left, Values on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Left Column: Timeline */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                История Клуба
              </h3>
            </div>

            <div className="relative">
              {/* Vertical Line on the left */}
              <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-neutral-800"></div>
              
              {[
                { year: '2022', title: 'Основание', desc: 'Открытие первых групп для детей 6-8 лет. Формирование тренерского штаба.' },
                { year: '2023', title: 'Первые турниры', desc: 'Участие в городских соревнованиях. Открытие групп для всех возрастов до 12 лет.' },
                { year: '2024', title: 'Филиалы и Кубки', desc: 'Победа в Зимнем Кубке. Открытие 3 новых локаций. Запуск юношеской команды U-16.' },
              ].map((item, i) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative flex flex-col mb-10 last:mb-0 pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-neutral-950 transform -translate-x-1/2 top-1.5 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  
                  <div className="glass-panel p-6 rounded-2xl border border-neutral-800 hover:border-emerald-500/40 transition-colors">
                    <div className="text-emerald-400 font-black font-mono text-xl mb-1">{item.year}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Mission and Values */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                Наши Ценности
              </h3>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-neutral-800 relative overflow-hidden group"
            >
              {/* Decorative accent */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <p className="text-gray-300 leading-relaxed font-light mb-8 text-lg">
                  {siteSettings.missionText || t.about.missionText}
                </p>

                <div className="space-y-4">
                  {[
                    "Профессиональный рост в футболе",
                    "Развитие лидерских качеств",
                    "Дисциплина и командный дух",
                    "Интеграция в новую среду",
                    "Взаимное уважение"
                  ].map((val, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex items-center gap-4 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800/50"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white font-medium">{val}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Coaching Staff Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                {t.about.staffTitle}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {t.about.staffSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((coach, index) => (
              <motion.div 
                key={coach.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                className="group relative bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-emerald-900/20 transition-shadow duration-300"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden border-b-2 border-emerald-500/20">
                  <div className="absolute top-3 left-3 text-3xl font-black italic text-emerald-500 drop-shadow-md z-10 font-mono">
                    COACH
                  </div>
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
                </div>

                <div className="p-4 pt-1 text-center relative z-10 bg-neutral-950">
                  <h4 className="text-lg font-black text-white uppercase tracking-wide leading-tight group-hover:text-emerald-400 transition-colors">
                    {coach.name}
                  </h4>
                  <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-1">
                    {coach.license}
                  </div>
                  
                  <div className="mt-4 border-t border-neutral-800 pt-3">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {coach.role}
                    </p>
                    <p className="text-xs text-emerald-400 mt-2">
                      {coach.experience}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Infinite Marquee */}
        <div className="pt-10 border-t border-neutral-900 overflow-hidden relative">
          <div className="text-center mb-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              {t.about.partnersTitle}
            </h4>
          </div>

          <div className="relative flex overflow-hidden w-full group">
            {/* Left and Right Gradients for smooth fade out */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none"></div>

            <motion.div 
              className="flex gap-8 px-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {/* Duplicate partners array multiple times to ensure seamless scrolling */}
              {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`}
                  className="glass-panel p-4 rounded-xl border border-neutral-800 flex items-center gap-3 hover:border-emerald-500/40 transition-colors w-[250px] shrink-0"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-10 h-10 rounded-lg object-cover filter grayscale hover:grayscale-0 transition-all"
                  />
                  <div className="text-left">
                    <div className="text-sm font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">{partner.name}</div>
                    <div className="text-[10px] text-emerald-400 uppercase tracking-wider">{partner.type}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
