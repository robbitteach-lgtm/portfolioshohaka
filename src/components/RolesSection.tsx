import React, { useState } from 'react';
import { 
  Briefcase, 
  Atom, 
  Bot, 
  Cpu, 
  Terminal, 
  Sparkles, 
  Globe, 
  Zap, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  X,
  Layers
} from 'lucide-react';
import { ROLES, Role } from '../data/portfolioData';
import { playTechClick } from '../utils/soundEffects';

interface RolesSectionProps {
  isDark: boolean;
}

export const RolesSection: React.FC<RolesSectionProps> = ({ isDark }) => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return Atom;
      case 'Bot': return Bot;
      case 'Cpu': return Cpu;
      case 'Terminal': return Terminal;
      case 'Sparkles': return Sparkles;
      case 'Globe': return Globe;
      case 'Zap': return Zap;
      case 'Compass': return Compass;
      default: return Briefcase;
    }
  };

  const categories = [
    { id: 'all', label: 'Barcha Kasblar' },
    { id: 'Ta\'lim & Pedagogika', label: 'Ta‘lim' },
    { id: 'Muhandislik & Apparat', label: 'Robotika & Apparat' },
    { id: 'Mikrokontrollerlar & IoT', label: 'IoT & ESP32' },
    { id: 'Dasturiy Ta\'minot', label: 'Dasturlash & AI' },
  ];

  const filteredRoles = filter === 'all' 
    ? ROLES 
    : ROLES.filter(r => r.category.includes(filter) || (filter === 'Dasturlash & AI' && (r.id === 'python-coder' || r.id === 'ai-specialist' || r.id === 'frontend-developer')));

  return (
    <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-tech font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 // Kasbiy Spektr</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-4">
            Mening Kasblarim & Mutaxassisliklarim
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Bitta soha bilan cheklanmagan — fizika nazariyasidan tortib bionika va neyrotarmoqlargacha bo‘lgan ko‘p qirrali muhandislik tajribasi.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playTechClick(700, 0.04);
                  setFilter(cat.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30'
                    : isDark
                      ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roles Grid: 8 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRoles.map((role) => {
            const Icon = getRoleIcon(role.iconName);
            return (
              <div
                key={role.id}
                className={`relative group rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 glass-card-hover ${
                  isDark 
                    ? 'bg-slate-900/70 border-cyan-500/20 hover:border-cyan-400/50 shadow-lg shadow-cyan-950/20' 
                    : 'bg-white/85 border-sky-200 hover:border-sky-400 shadow-md shadow-sky-900/5'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600/20 to-indigo-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-tech font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {role.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-lg font-bold font-display tracking-tight mb-1 text-slate-100 group-hover:text-cyan-400 transition-colors">
                    <span className={isDark ? 'text-white' : 'text-slate-900'}>{role.title}</span>
                  </h3>
                  <div className="text-xs font-tech text-cyan-400/80 mb-3">
                    {role.category}
                  </div>

                  {/* Short Description */}
                  <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {role.shortDesc}
                  </p>

                  {/* Skills tags preview */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {role.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[10px] px-2 py-0.5 rounded font-tech ${
                          isDark 
                            ? 'bg-slate-950/70 border border-slate-800 text-slate-300' 
                            : 'bg-slate-100 border border-slate-200 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {role.skills.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded text-cyan-400 font-tech">
                        +{role.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => {
                    playTechClick(800, 0.05);
                    setSelectedRole(role);
                  }}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border ${
                    isDark 
                      ? 'bg-slate-950/60 border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-900' 
                      : 'bg-sky-50 border-sky-100 text-sky-800 hover:bg-sky-100 hover:border-sky-300'
                  }`}
                >
                  <span>Batafsil ma'lumot</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Role Deep-Dive Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className={`relative w-full max-w-xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
            isDark 
              ? 'bg-slate-900 border-cyan-500/30 text-slate-100 shadow-2xl shadow-cyan-950/50' 
              : 'bg-white border-sky-300 text-slate-900 shadow-2xl shadow-sky-900/20'
          }`}>
            
            {/* Close button */}
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                {React.createElement(getRoleIcon(selectedRole.iconName), { className: "w-7 h-7" })}
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-tech font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {selectedRole.category}
                </span>
                <h3 className="text-2xl font-bold font-display mt-1">
                  {selectedRole.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {selectedRole.fullDesc}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-tech font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Amaliy Natijalar & Yondashuv
              </h4>
              <ul className="space-y-2">
                {selectedRole.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Skills list */}
            <div className="mb-6">
              <h4 className="text-xs font-tech font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Ishlatiladigan Texnologiyalar & Ko‘nikmalar
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedRole.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1 rounded-lg text-xs font-tech border ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-cyan-300' 
                        : 'bg-slate-100 border-slate-200 text-sky-800'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action button */}
            <div className="pt-4 border-t border-slate-800/40 flex justify-end">
              <button
                onClick={() => setSelectedRole(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all"
              >
                Tushunarli / Yopish
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
