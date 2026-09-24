import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NewsSection() {
  const { t, news, setActiveArticle } = useApp();
  const [filter, setFilter] = useState('all');

  let filteredNews = filter === 'all' 
    ? news 
    : news.filter(item => item.category === filter);

  if (filteredNews.length === 0) {
    filteredNews = [{
      id: "test-news",
      title: "Победа в региональном турнире!",
      category: "matches",
      date: new Date().toLocaleDateString('ru-RU'),
      author: "Пресс-служба",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
      content: "Наша команда U-16 одержала блестящую победу в финале регионального кубка со счетом 3:1. Поздравляем ребят и тренерский штаб с великолепным результатом и красивой игрой! Это только начало нашего победного пути в этом сезоне."
    }];
  }

  return (
    <section id="news" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
              ACADEMY MEDIA CENTER
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t.news.title}
            </h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">
              {t.news.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-900 p-1.5 rounded-xl border border-neutral-800">
            {[
              { id: 'all', label: t.news.all },
              { id: 'matches', label: t.news.matches },
              { id: 'tournaments', label: t.news.tournaments },
              { id: 'life', label: t.news.life },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
            <motion.article 
              key={article.id} 
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(16,185,129,0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-panel rounded-3xl overflow-hidden border border-neutral-800 hover:border-emerald-500/40 transition-colors flex flex-col group cursor-pointer"
              onClick={() => setActiveArticle(article)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full backdrop-blur-md">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-emerald-400" />
                      {article.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-3 font-light line-clamp-3">
                    {article.content}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300">
                  <span>{t.news.readMore}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
