import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NextMatch() {
  const { t } = useApp();

  // Simple countdown logic
  const [matchDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3); // Fake match in 3 days
    d.setHours(15, 0, 0, 0);
    return d;
  });
  
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = matchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [matchDate]);

  return (
    <section className="relative mt-8 mb-16 z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-6">
            <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Ближайший матч</h3>
            <p className="text-gray-400 text-sm">Зимний Кубок г. Варшавы • Тур 5</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            
            {/* Team 1 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-neutral-950 border border-emerald-500/30 rounded-full flex items-center justify-center mb-4 p-4 shadow-lg shadow-emerald-900/20">
                <img src="/logo.png" alt="FC Challenge" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white uppercase text-center">FC Challenge</h4>
            </div>

            {/* VS & Timer */}
            <div className="flex flex-col items-center flex-1">
              <div className="text-2xl font-black italic text-neutral-600 mb-4">VS</div>
              
              <div className="flex gap-3 text-center">
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 w-16 sm:w-20">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold mt-1">Дней</div>
                </div>
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 w-16 sm:w-20">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold mt-1">Часов</div>
                </div>
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 w-16 sm:w-20 hidden sm:block">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold mt-1">Минут</div>
                </div>
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center mb-4 p-4 shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Legia_Warszawa_logo.svg/1200px-Legia_Warszawa_logo.svg.png" alt="Legia" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white uppercase text-center">Legia Warszawa</h4>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 border-t border-neutral-800 pt-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4 text-emerald-500" />
              <span>{matchDate.toLocaleDateString('ru-RU')}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>15:00</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Stadion Narodowy, Warsaw</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
