import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  Cpu, 
  Bot, 
  Sparkles, 
  Atom, 
  Layers, 
  Flame,
  CheckCircle2
} from 'lucide-react';
import { SKILLS, SkillItem } from '../data/portfolioData';
import { playTechClick } from '../utils/soundEffects';

interface SkillsSectionProps {
  isDark: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Barcha Ko‘nikmalar', icon: Wrench },
    { id: 'code', label: 'Dasturlash (Python, C++, JS)', icon: Code2 },
    { id: 'hardware', label: 'Mikrokontroller & Sensorlar', icon: Cpu },
    { id: 'robotics', label: 'Robototexnika', icon: Bot },
    { id: 'ai', label: 'Sun‘iy Intellekt & CV', icon: Sparkles },
    { id: 'physics', label: 'Fundamental Fizika', icon: Atom },
    { id: 'engineering', label: 'Elektronika & 3D', icon: Layers },
  ];

  const filteredSkills = selectedCat === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCat);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-tech font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>03 // Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-4">
            Ko‘nikmalar & Texnik Salohiyat
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Fizik qonunlar hisob-kitobidan tortib mikrokontrollerlar montaji, Python skriptlari va neyrotarmoqlar integratsiyasigacha.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playTechClick(720, 0.04);
                    setSelectedCat(cat.id);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30'
                      : isDark
                        ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-300 glass-card-hover ${
                isDark 
                  ? 'bg-slate-900/70 border-cyan-500/20 hover:border-cyan-400/50 shadow-md shadow-cyan-950/20' 
                  : 'bg-white/85 border-sky-200 hover:border-sky-400 shadow-md shadow-sky-900/5'
              }`}
            >
              {/* Header: Name and percentage */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <h3 className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {skill.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 font-tech">
                  <span className="text-xs text-slate-400">{skill.experience}</span>
                  <span className="text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Glowing Cyber Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-950/80 overflow-hidden p-[1px] border border-slate-800 mb-3">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 transition-all duration-700 relative"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="absolute right-0 top-0 bottom-0 w-2 bg-white/70 animate-pulse rounded-full"></span>
                </div>
              </div>

              {/* Description */}
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Floating Badges Banner */}
        <div className={`mt-14 p-6 rounded-2xl border text-center ${
          isDark 
            ? 'bg-slate-900/40 border-cyan-500/15' 
            : 'bg-sky-50/70 border-sky-200'
        }`}>
          <div className="text-xs font-tech text-cyan-400 uppercase tracking-widest mb-3">
            // DOIMIY ISHLATILADIGAN PLATFORMA VA QUROL-ASBOBLAR
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Python 3.12", "C++ (AVR & Xtensa)", "ESP32 DevKit", "Arduino Mega/Nano",
              "OpenCV", "TensorFlow Lite", "EasyEDA PCB", "Fusion 360", "React 19",
              "TypeScript", "Tailwind CSS", "Linux / CLI", "Git & GitHub", "MQTT & WebSocket"
            ].map((tool, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 rounded-lg text-xs font-tech font-medium border ${
                  isDark 
                    ? 'bg-slate-950/80 border-slate-800 text-slate-300' 
                    : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
