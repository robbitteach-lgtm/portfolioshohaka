/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CyberBackground } from './components/CyberBackground';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RolesSection } from './components/RolesSection';
import { SkillsSection } from './components/SkillsSection';
import { PhysicsLabWidget } from './components/PhysicsLabWidget';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VCardModal } from './components/VCardModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme_preference');
    return saved !== null ? saved === 'dark' : true; // Default dark cyberpunk theme
  });

  const [selectedService, setSelectedService] = useState<string>('');
  const [isVCardOpen, setIsVCardOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme_preference', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme_preference', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenMiniLab = () => {
    const labElem = document.querySelector('#lab');
    if (labElem) {
      labElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-950 text-slate-100 circuit-grid' 
        : 'bg-slate-50 text-slate-900 circuit-grid-light'
    }`}>
      
      {/* Interactive Physics & Circuit Canvas Background */}
      <CyberBackground isDark={isDark} />

      {/* Sticky Top Navigation */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenVCard={() => setIsVCardOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <HeroSection
          isDark={isDark}
          onOpenMiniLab={handleOpenMiniLab}
        />

        {/* 2. Men Haqimda */}
        <AboutSection
          isDark={isDark}
          onOpenVCard={() => setIsVCardOpen(true)}
        />

        {/* 3. Kasblarim (8 ta mutaxassislik) */}
        <RolesSection
          isDark={isDark}
        />

        {/* 4. Ko‘nikmalar */}
        <SkillsSection
          isDark={isDark}
        />

        {/* 5. Mini-Laboratoriya (Ohm Qonuni & Mayatnik) */}
        <PhysicsLabWidget
          isDark={isDark}
        />

        {/* 6. Loyihalarim */}
        <ProjectsSection
          isDark={isDark}
        />

        {/* 7. Xizmatlarim */}
        <ServicesSection
          isDark={isDark}
          onSelectService={(serviceTitle) => setSelectedService(serviceTitle)}
        />

        {/* 8. Yutuqlarim & FAQ */}
        <AchievementsSection
          isDark={isDark}
        />

        {/* 9. Aloqa */}
        <ContactSection
          isDark={isDark}
          selectedServicePreload={selectedService}
          onOpenVCard={() => setIsVCardOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Mobile & Desktop vCard modal */}
      <VCardModal
        isOpen={isVCardOpen}
        onClose={() => setIsVCardOpen(false)}
        isDark={isDark}
      />

    </div>
  );
}
