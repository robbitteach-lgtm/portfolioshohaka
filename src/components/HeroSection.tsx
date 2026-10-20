import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Atom, 
  Bot, 
  Code2, 
  Zap, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check, 
  Flame, 
  Layers,
  Compass
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playTechClick } from '../utils/soundEffects';

interface HeroSectionProps {
  isDark: boolean;
  onOpenMiniLab: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark, onOpenMiniLab }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const rotatingRoles = [
    "Fizika O‘qituvchisi",
    "Robototexnik Muhandis",
    "Arduino & ESP32 Dasturchisi",
    "Python & AI Mutaxassisi",
    "Frontend Veb-Dasturchi",
    "Elektronika & IoT Innovatori"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingRoles.length]);

  const handleCopyEmail = () => {
    playTechClick(850, 0.05);
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScrollTo = (id: string) => {
    playTechClick(650, 0.04);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline, Bio & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Futuristic Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 shadow-sm shadow-cyan-900/20 backdrop-blur-md mb-6 hover:border-cyan-400 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-tech tracking-wide uppercase text-[11px]">
              23 YOSH • FIZIKA, MUHANDISLIK & DASTURLASH
            </span>
            <span className="text-cyan-500/40">•</span>
            <span className="text-[11px] text-cyan-400/90 font-medium hidden sm:inline">
              Ochiq imkoniyatlar
            </span>
          </div>

          {/* Main Huge Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display mb-4 leading-[1.12]">
            <span className={isDark ? "text-white" : "text-slate-900"}>
              Salom, men{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
              Shohrux Obbosxonovman!
            </span>
          </h1>

          {/* Dynamic Role Badge Ticker */}
          <div className="flex items-center gap-2.5 mb-5 flex-wrap min-h-[38px]">
            <span className={`text-sm sm:text-base font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Yo‘nalish:
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-tech text-sm sm:text-base font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="transition-all duration-300">
                {rotatingRoles[roleIndex]}
              </span>
            </div>
          </div>

          {/* Subtitle / Core Statement */}
          <p className={`text-lg sm:text-xl md:text-2xl font-medium mb-6 leading-relaxed max-w-2xl ${
            isDark ? 'text-slate-200' : 'text-slate-700'
          }`}>
            “Ilm-fan, muhandislik va texnologiyalar orqali kelajakni yarataman”
          </p>

          {/* Short Narrative Overview */}
          <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-2xl ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Fizikaning fundamental qonunlarini zamonaviy dasturlash (Python, C++), mikrokontrollerlar (Arduino, ESP32), sun’iy intellekt va veb texnologiyalar bilan birlashtirib, real dunyoda ishlovchi aqlli qurilmalar va innovatsion loyihalar yarataman.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
            <button
              onClick={() => handleScrollTo('#projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group text-sm"
            >
              <span>Loyihalarni ko‘rish</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('#contact')}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 border ${
                isDark 
                  ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800' 
                  : 'border-slate-300 bg-white text-slate-800 hover:border-sky-400 hover:bg-sky-50'
              }`}
            >
              <span>Bog‘lanish</span>
            </button>

            <button
              onClick={() => {
                playTechClick(800, 0.05);
                onOpenMiniLab();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs border border-cyan-500/40 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all duration-200"
            >
              <Atom className="w-4 h-4 text-cyan-400" />
              <span>Interaktiv Mini-Lab</span>
            </button>
          </div>

          {/* Quick Copy Contact Line */}
          <div className="flex items-center gap-3 pt-2 text-xs">
            <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
              Tezkor email:
            </span>
            <button
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-tech transition-colors border ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-cyan-400 hover:border-cyan-500/40' 
                  : 'bg-slate-100 border-slate-200 text-sky-700 hover:border-sky-300'
              }`}
            >
              <span>{PERSONAL_INFO.email}</span>
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            </button>
            {copiedEmail && (
              <span className="text-[11px] text-emerald-400 font-medium">
                Nusxa olindi!
              </span>
            )}
          </div>

        </div>

        {/* Right Column: Futuristic Cybernetic Profile & Telemetry Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center z-10">
          
          <div className="relative w-full max-w-md">
            
            {/* Glowing Orbit Rings */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-indigo-500/20 blur-xl opacity-75"></div>

            {/* Main Holographic / Glass Card */}
            <div className={`relative rounded-2xl border p-6 overflow-hidden transition-all duration-300 ${
              isDark 
                ? 'bg-slate-900/80 border-cyan-500/30 shadow-2xl shadow-cyan-950/40' 
                : 'bg-white/90 border-sky-300 shadow-xl shadow-sky-900/10'
            }`}>
              
              {/* Card Header Telemetry HUD */}
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="text-xs font-tech font-bold uppercase tracking-wider text-cyan-400">
                    SYS.ACTIVE // ID-23-SHOHRUX
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-tech text-slate-400">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ESP32 • 240MHz</span>
                </div>
              </div>

              {/* Avatar Photo Frame with Cybernetic Circuit Frame */}
              <div className="relative mx-auto w-52 h-52 sm:w-60 sm:h-60 mb-5 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-600 shadow-xl shadow-cyan-500/25">
                <div className="w-full h-full rounded-[14px] overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
                    alt="Shohrux Obbosxonov — Fizika o'qituvchisi, muhandis, robototexnik"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Sci-Fi Grid Overlay on Avatar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Overlay Badges */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-[11px] font-tech font-bold text-cyan-300">
                      ⚡ 23 yosh
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-emerald-400/40 text-[11px] font-tech font-bold text-emerald-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Online
                    </span>
                  </div>
                </div>

                {/* Corner Tech Marks */}
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></span>
                <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></span>
                <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></span>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></span>
              </div>

              {/* Bio Highlights / Spec Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs font-tech mb-4">
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="text-[10px] text-slate-400 uppercase">Asosiy Mutaxassislik</div>
                  <div className="font-bold text-cyan-400 truncate mt-0.5">Fizika & Robotika</div>
                </div>
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="text-[10px] text-slate-400 uppercase">Dasturlash Tili</div>
                  <div className="font-bold text-indigo-400 truncate mt-0.5">Python & C++ (ESP32)</div>
                </div>
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="text-[10px] text-slate-400 uppercase">O'quvchilar Soni</div>
                  <div className="font-bold text-emerald-400 truncate mt-0.5">650+ Shogird</div>
                </div>
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="text-[10px] text-slate-400 uppercase">Hardware Prototip</div>
                  <div className="font-bold text-amber-400 truncate mt-0.5">15+ IoT & Robot</div>
                </div>
              </div>

              {/* Formula & Tech Bar */}
              <div className={`p-2 rounded-xl text-center text-xs font-tech border ${
                isDark ? 'bg-cyan-950/20 border-cyan-500/20 text-cyan-300' : 'bg-sky-50 border-sky-200 text-sky-800'
              }`}>
                <span className="text-slate-400">Formula: </span>
                <span className="font-bold text-cyan-400">E = mc²</span>
                <span className="text-slate-500 mx-2">•</span>
                <span className="font-bold text-sky-400">I = U / R</span>
                <span className="text-slate-500 mx-2">•</span>
                <span className="font-bold text-indigo-400">T = 2π√(L/g)</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Numerical Stats Bar under Hero */}
      <div className="max-w-7xl mx-auto w-full mt-14 z-10">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl border backdrop-blur-md ${
          isDark 
            ? 'bg-slate-900/60 border-cyan-500/20 shadow-lg shadow-cyan-950/20' 
            : 'bg-white/80 border-sky-200 shadow-md shadow-sky-900/5'
        }`}>
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left px-3 py-2 border-r last:border-r-0 border-slate-800/40">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold font-display bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-xs font-tech text-cyan-400 font-semibold">{stat.unit}</span>
              </div>
              <div className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
