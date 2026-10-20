import React, { useState } from 'react';
import { 
  Award, 
  Trophy, 
  FileCheck, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ExternalLink,
  HelpCircle,
  X
} from 'lucide-react';
import { ACHIEVEMENTS, FAQS, Achievement } from '../data/portfolioData';
import { playTechClick } from '../utils/soundEffects';

interface AchievementsSectionProps {
  isDark: boolean;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ isDark }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const toggleFaq = (index: number) => {
    playTechClick(700, 0.03);
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-tech font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>07 // Yutuqlarim & E’tiroflar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-4">
            Sertifikatlar, Tanlovlar & Natijalar
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Fan olimpiadalaridan tortib xalqaro texnologik sertifikatlar va muvaffaqiyatli shogirdlar e’tirofigacha.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              onClick={() => {
                playTechClick(800, 0.04);
                setSelectedAchievement(ach);
              }}
              className={`p-6 rounded-2xl border transition-all duration-300 glass-card-hover cursor-pointer group ${
                isDark 
                  ? 'bg-slate-900/70 border-cyan-500/20 hover:border-cyan-400/50 shadow-md shadow-cyan-950/20' 
                  : 'bg-white/85 border-sky-200 hover:border-sky-400 shadow-md shadow-sky-900/5'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-tech font-bold text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                  {ach.year}
                </span>
                <span className="text-[10px] font-tech font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  {ach.badge}
                </span>
              </div>

              <h3 className={`text-base font-bold font-display mb-1 group-hover:text-cyan-400 transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {ach.title}
              </h3>

              <div className="text-xs font-semibold text-cyan-400/80 mb-3">
                {ach.organization}
              </div>

              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {ach.description}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-tech text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Savol-Javoblar</span>
            </div>
            <h3 className="text-2xl font-bold font-display">
              Ko‘p Beriladigan Savollar (FAQ)
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-semibold text-sm transition-colors"
                  >
                    <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                    )}
                  </button>

                  {isOpen && (
                    <div className={`px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t ${
                      isDark ? 'border-slate-800/60 text-slate-400' : 'border-slate-100 text-slate-600'
                    }`}>
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className={`relative w-full max-w-lg rounded-2xl border p-6 sm:p-8 ${
            isDark 
              ? 'bg-slate-900 border-cyan-500/30 text-slate-100 shadow-2xl' 
              : 'bg-white border-sky-300 text-slate-900 shadow-2xl'
          }`}>
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
              <Trophy className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-tech font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {selectedAchievement.year}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-tech bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                {selectedAchievement.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold font-display mb-1">
              {selectedAchievement.title}
            </h3>

            <div className="text-xs font-semibold text-cyan-400 mb-4">
              {selectedAchievement.organization}
            </div>

            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {selectedAchievement.description}
            </p>

            <button
              onClick={() => setSelectedAchievement(null)}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all"
            >
              Yopish
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
