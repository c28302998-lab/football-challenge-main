import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NextMatch from './components/NextMatch';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import TeamsSection from './components/TeamsSection';
import NewsSection from './components/NewsSection';
import TournamentsSection from './components/TournamentsSection';
import MediaSection from './components/MediaSection';
import SponsorsSection from './components/SponsorsSection';
import AcademySection from './components/AcademySection';
import ContactsSection from './components/ContactsSection';
import Footer from './components/Footer';
import { TrialModal, SponsorModal } from './components/TrialModal';
import { VideoModal, PhotoModal, ArticleModal } from './components/MediaModals';
import AnimatedSection from './components/AnimatedSection';
import Preloader from './components/Preloader';

function AppContent() {
  const { themeSettings } = useApp();
  const primaryColor = themeSettings?.primaryColor || '#10b981';

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 font-sans antialiased selection:bg-emerald-600 selection:text-white"
         style={{ 
           '--color-emerald-400': primaryColor,
           '--color-emerald-500': primaryColor,
           '--color-emerald-600': primaryColor,
           '--color-emerald-900': primaryColor + '40'
         }}>
      {/* Preloader */}
      <Preloader />

      {/* Navigation Bar */}
      <Navbar />

        {/* Main Content Sections */}
        <main>
          <AnimatedSection><Hero /></AnimatedSection>
          <AnimatedSection><NextMatch /></AnimatedSection>
          <AnimatedSection><AboutSection /></AnimatedSection>
          <AnimatedSection><StatsSection /></AnimatedSection>
          <AnimatedSection><TeamsSection /></AnimatedSection>
          <AnimatedSection><NewsSection /></AnimatedSection>
          <AnimatedSection><TournamentsSection /></AnimatedSection>
          <AnimatedSection><MediaSection /></AnimatedSection>
          <AnimatedSection><SponsorsSection /></AnimatedSection>
          <AnimatedSection><AcademySection /></AnimatedSection>
          <AnimatedSection><ContactsSection /></AnimatedSection>
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Pop-up Modals */}
        <TrialModal />
        <SponsorModal />
        <VideoModal />
        <PhotoModal />
        <ArticleModal />
      </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
