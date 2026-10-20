import React from 'react';
import { 
  Atom, 
  ArrowUp, 
  MessageSquare, 
  Instagram, 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playTechClick } from '../utils/soundEffects';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    playTechClick(800, 0.04);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t relative z-10 transition-colors ${
      isDark ? 'bg-slate-950/90 border-cyan-500/20 text-slate-400' : 'bg-slate-100/90 border-sky-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-slate-800/60">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Atom className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Fizika o‘qituvchisi, muhandis, robototexnik, Arduino & ESP32 dasturchisi, sun’iy intellekt va IoT texnologiyalari tadqiqotchisi.
            </p>
            <div className="text-[11px] font-tech text-cyan-400">
              ⚡ 23 yosh • Toshkent, O‘zbekiston
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Bosh sahifa</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">Men haqimda</a>
            <a href="#roles" className="hover:text-cyan-400 transition-colors">Kasblar</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Ko‘nikmalar</a>
            <a href="#lab" className="hover:text-cyan-400 transition-colors">Mini-Lab</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Loyihalar</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Xizmatlar</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Aloqa</a>
          </div>

          {/* Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                title="Email"
                className="w-9 h-9 rounded-xl border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                title="Yuqoriga qaytish"
                className="w-9 h-9 rounded-xl border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 flex items-center justify-center hover:bg-cyan-900/40 hover:border-cyan-400 transition-colors ml-2"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <span className="text-[11px] font-tech text-slate-500">
              BUILD: v2.3 // 2026
            </span>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © 2026 {PERSONAL_INFO.name}. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex items-center gap-1 font-tech">
            <span>Ilm-fan, muhandislik va texnologiyalar orqali kelajakni yaratamiz</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
