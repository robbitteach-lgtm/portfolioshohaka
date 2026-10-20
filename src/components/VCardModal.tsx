import React, { useState } from 'react';
import { X, Download, Copy, Check, QrCode, Phone, Mail, Send, MapPin, Sparkles, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playTechClick, playSuccessChime } from '../utils/soundEffects';

interface VCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const VCardModal: React.FC<VCardModalProps> = ({ isOpen, onClose, isDark }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownloadVCF = () => {
    playSuccessChime();
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${PERSONAL_INFO.name}`,
      `N:Obbosxonov;Shohrux;;;`,
      `TITLE:Fizika O‘qituvchisi, Muhandis & Robototexnik`,
      `ORG:STEAM & Robotics Laboratory`,
      `EMAIL;TYPE=INTERNET,WORK:${PERSONAL_INFO.email}`,
      `TEL;TYPE=CELL:${PERSONAL_INFO.phone}`,
      `ADR;TYPE=WORK:;;Toshkent;Toshkent;;O‘zbekiston`,
      `NOTE:Fizika, Robototexnika, AI, Arduino & ESP32 Muhandisi`,
      `URL:${window.location.origin}`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Shohrux_Obbosxonov.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopySummary = () => {
    playTechClick(850, 0.05);
    const summary = `${PERSONAL_INFO.name}\n${PERSONAL_INFO.headline}\nEmail: ${PERSONAL_INFO.email}\nTelegram: ${PERSONAL_INFO.telegramHandle}\nTelefon: ${PERSONAL_INFO.phone}\nManzil: ${PERSONAL_INFO.location}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className={`relative w-full max-w-md rounded-3xl border p-6 sm:p-7 ${
        isDark 
          ? 'bg-slate-900 border-cyan-500/30 text-white shadow-2xl shadow-cyan-950/50' 
          : 'bg-white border-sky-300 text-slate-900 shadow-2xl shadow-sky-900/20'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-cyan-400">
            DIGITAL BUSINESS CARD // VCARD 3.0
          </span>
        </div>

        {/* Card Body */}
        <div className={`p-5 rounded-2xl border mb-5 relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border-cyan-500/30' 
            : 'bg-gradient-to-br from-sky-50 via-white to-indigo-50 border-sky-200'
        }`}>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-semibold text-cyan-400">
                23 yosh • Fizika & Coder
              </p>
              <p className="text-[11px] text-slate-400">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs font-tech">
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Send className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{PERSONAL_INFO.telegramHandle}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleDownloadVCF}
            className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Telefon Kontaktiga Saqlash (.vcf yuklab olish)</span>
          </button>

          <button
            onClick={handleCopySummary}
            className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs border flex items-center justify-center gap-2 transition-colors ${
              isDark 
                ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700' 
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
            }`}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Ma‘lumotlar nusxalandi!" : "Barcha kontaktlarni nusxalash"}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
