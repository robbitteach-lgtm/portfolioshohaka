import React, { useState, useEffect } from 'react';
import { 
  Atom, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Send, 
  Sparkles,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { isSoundEnabled, setSoundEnabled, playTechClick } from '../utils/soundEffects';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onOpenVCard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, onOpenVCard }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = !soundOn;
    setSoundOn(newState);
    setSoundEnabled(newState);
    if (newState) {
      playTechClick(880, 0.08);
    }
  };

  const navLinks = [
    { label: "Bosh sahifa", href: "#hero" },
    { label: "Men haqimda", href: "#about" },
    { label: "Kasblar", href: "#roles" },
    { label: "Ko‘nikmalar", href: "#skills" },
    { label: "Mini-Lab", href: "#lab", badge: "Live" },
    { label: "Loyihalar", href: "#projects" },
    { label: "Xizmatlar", href: "#services" },
    { label: "Yutuqlar", href: "#achievements" },
    { label: "Aloqa", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    playTechClick(650, 0.04);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? isDark 
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/20' 
            : 'bg-white/85 backdrop-blur-md border-b border-sky-200 py-3 shadow-md shadow-sky-900/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/25 group-hover:shadow-cyan-400/50 transition-all duration-300">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
                <Atom className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
                <span className="px-1.5 py-0.2 text-[10px] font-tech font-semibold uppercase tracking-wider rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  v2.3
                </span>
              </div>
              <span className={`text-[11px] font-mono leading-none tracking-wide ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Fizika • Robotika • Coder
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  isDark 
                    ? 'text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60' 
                    : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 animate-pulse">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? "Ovozli effektlarni o'chirish" : "Ovozli effektlarni yoqish (Sci-fi SFX)"}
              className={`p-2 rounded-xl transition-all duration-200 border ${
                isDark 
                  ? soundOn 
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200' 
                  : soundOn 
                    ? 'bg-sky-100 border-sky-300 text-sky-600' 
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => {
                playTechClick(750, 0.05);
                toggleTheme();
              }}
              title={isDark ? "Yorug' rejimga o'tish" : "Qorong'i rejimga o'tish"}
              className={`p-2 rounded-xl transition-all duration-200 border ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                  : 'bg-slate-100 border-slate-200 text-indigo-600 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick vCard Button */}
            <button
              onClick={() => {
                playTechClick(820, 0.05);
                onOpenVCard();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>vCard</span>
            </button>

            {/* Primary CTA: Bog'lanish */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="relative inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-600/30 hover:shadow-cyan-500/50 transition-all duration-300 group overflow-hidden"
            >
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden xs:inline">Bog‘lanish</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playTechClick(700, 0.04);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`xl:hidden p-2 rounded-xl border transition-colors ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-slate-300' 
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className={`xl:hidden fixed inset-x-0 top-[61px] border-b backdrop-blur-xl p-5 shadow-2xl transition-all duration-300 ${
            isDark 
              ? 'bg-slate-950/95 border-cyan-500/20 text-slate-200' 
              : 'bg-white/95 border-sky-200 text-slate-800'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isDark 
                    ? 'hover:bg-slate-900 text-slate-200 hover:text-cyan-400' 
                    : 'hover:bg-sky-50 text-slate-800 hover:text-sky-600'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVCard();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-xl border border-cyan-500/30 bg-cyan-950/30 text-cyan-300"
              >
                <Download className="w-4 h-4" />
                <span>Kontaktni yuklab olish (vCard)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
