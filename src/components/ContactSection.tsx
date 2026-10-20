import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MessageSquare, 
  Instagram, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playTechClick, playSuccessChime } from '../utils/soundEffects';

interface ContactSectionProps {
  isDark: boolean;
  selectedServicePreload?: string;
  onOpenVCard: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  isDark, 
  selectedServicePreload,
  onOpenVCard 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactHandle: '',
    service: selectedServicePreload || 'Fizika darslari',
    message: '',
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Update selected service if parent changes it
  React.useEffect(() => {
    if (selectedServicePreload) {
      setFormData(prev => ({ ...prev, service: selectedServicePreload }));
    }
  }, [selectedServicePreload]);

  const handleCopy = (text: string, key: string) => {
    playTechClick(850, 0.05);
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    playTechClick(750, 0.04);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSuccessChime();

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }, 900);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-tech font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>08 // Bog‘lanish</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-4">
            Birgalikda Kelajakni Yaratamiz
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Fizika darslari, robototexnika loyihalari, mikrokontrollerli qurilmalar yoki veb-sayt yaratish bo‘yicha takliflaringizni yozib qoldiring.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Channels & Placeholders (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Cards */}
            <div className={`p-6 sm:p-7 rounded-2xl border backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/80 border-cyan-500/20 shadow-xl' 
                : 'bg-white/85 border-sky-200 shadow-md'
            }`}>
              <h3 className="text-lg font-bold font-display mb-1 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                To‘g‘ridan-to‘g‘ri Aloqa Kanallari
              </h3>
              <p className={`text-xs mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Quyidagi havolalar orqali menga istalgan vaqtda yozishingiz mumkin:
              </p>

              <div className="space-y-3.5">
                
                {/* Telegram */}
                <div className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-tech text-slate-400 uppercase">Telegram (Tezkor)</div>
                      <div className="font-bold text-xs sm:text-sm text-cyan-400">{PERSONAL_INFO.telegramHandle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.telegramHandle, 'tg')}
                      title="Nusxalash"
                      className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                    >
                      {copiedKey === 'tg' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={PERSONAL_INFO.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                    >
                      Ochish
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-tech text-slate-400 uppercase">Elektron Pochta</div>
                      <div className="font-bold text-xs sm:text-sm text-indigo-400 truncate max-w-[150px] sm:max-w-none">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.email, 'mail')}
                      title="Nusxalash"
                      className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                    >
                      {copiedKey === 'mail' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                    >
                      Yozish
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-400/30 flex items-center justify-center text-pink-400">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-tech text-slate-400 uppercase">Instagram Profil</div>
                      <div className="font-bold text-xs sm:text-sm text-pink-400">{PERSONAL_INFO.instagramHandle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.instagramHandle, 'insta')}
                      title="Nusxalash"
                      className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                    >
                      {copiedKey === 'insta' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={PERSONAL_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white transition-colors"
                    >
                      Ko‘rish
                    </a>
                  </div>
                </div>

                {/* Phone placeholder */}
                <div className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-tech text-slate-400 uppercase">Telefon Raqami (Joy ajratilgan)</div>
                      <div className="font-bold text-xs sm:text-sm text-emerald-400">{PERSONAL_INFO.phone}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    title="Nusxalash"
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  >
                    {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>

              {/* Note about real data editing */}
              <div className={`mt-5 p-3 rounded-xl border text-[11px] leading-relaxed flex items-start gap-2 ${
                isDark ? 'bg-cyan-950/20 border-cyan-500/20 text-cyan-300' : 'bg-sky-50 border-sky-200 text-sky-800'
              }`}>
                <Sparkles className="w-4 h-4 shrink-0 text-cyan-400 mt-0.5" />
                <span>
                  <strong>Eslatma:</strong> Shohrux Obbosxonov o‘zining haqiqiy Telegram, Instagram va telefon raqamlarini istalgan vaqtda kiritishi uchun o‘rinlar qoldirilgan.
                </span>
              </div>
            </div>

            {/* Quick vCard Button */}
            <div className={`p-5 rounded-2xl border flex items-center justify-between ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div>
                <h4 className="text-sm font-bold font-display">Tashrif Qog‘ozi (vCard)</h4>
                <p className="text-xs text-slate-400">Telefon kontaktiga bir zumda qo‘shish</p>
              </div>
              <button
                onClick={() => {
                  playTechClick(820, 0.05);
                  onOpenVCard();
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Ochish</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Message Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/80 border-cyan-500/20 shadow-xl' 
                : 'bg-white/85 border-sky-200 shadow-md'
            }`}>
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold font-display">
                    Xabar Yuborish Formasi
                  </h3>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Formani to‘ldiring — so‘rovingiz darhol qabul qilinadi
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-tech text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Tezkor javob: &lt; 2 soat</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-emerald-400">
                    Xabaringiz Qabul Qilindi!
                  </h4>
                  <p className={`text-sm max-w-md mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Rahmat, <strong>{formData.name}</strong>! Siz qoldirgan xabar va so‘rov Shohrux Obbosxonovga yo‘naltirildi. Tez orada bog‘lanamiz.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        contactHandle: '',
                        service: 'Fizika darslari',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all"
                  >
                    Yangi xabar yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">
                        Ismingiz <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor Aliyev"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:border-cyan-400 transition-colors ${
                          isDark 
                            ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">
                        Email Manzilingiz <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sizning-email@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:border-cyan-400 transition-colors ${
                          isDark 
                            ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Telegram username / Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">
                        Telegram yoki Telefon
                      </label>
                      <input
                        type="text"
                        placeholder="@username yoki +998..."
                        value={formData.contactHandle}
                        onChange={(e) => setFormData({ ...formData, contactHandle: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:border-cyan-400 transition-colors ${
                          isDark 
                            ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">
                        Qiziqtirgan Xizmat / Yo‘nalish
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:border-cyan-400 transition-colors ${
                          isDark 
                            ? 'bg-slate-950 border-slate-800 text-white' 
                            : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      >
                        <option value="Fizika chuqurlashtirilgan ta'limi">Fizika chuqurlashtirilgan ta'limi</option>
                        <option value="Robototexnika va STEAM kursi">Robototexnika va STEAM kursi</option>
                        <option value="Arduino & ESP32 qurilma yasash">Arduino & ESP32 qurilma yasash</option>
                        <option value="Veb-sayt yoki Landing Page">Veb-sayt yoki Landing Page</option>
                        <option value="AI & Kompyuter Ko'rishi loyihasi">AI & Kompyuter Ko'rishi loyihasi</option>
                        <option value="Elektronika sxemasi & 3D prototip">Elektronika sxemasi & 3D prototip</option>
                        <option value="Boshqa hamkorlik">Boshqa hamkorlik</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-300">
                      Xabaringiz yoki Loyiha Tafsilotlari <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Loyihangiz, maqsadlaringiz yoki fizika darslari bo‘yicha savolingizni yozing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:border-cyan-400 transition-colors resize-none ${
                        isDark 
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/30 hover:shadow-cyan-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Yuborilmoqda...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Xabarni Yuborish</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
