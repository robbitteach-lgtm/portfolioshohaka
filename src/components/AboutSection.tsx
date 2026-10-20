import React, { useState } from 'react';
import { 
  User, 
  Target, 
  Lightbulb, 
  BookOpen, 
  Cpu, 
  Compass, 
  Award, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playTechClick } from '../utils/soundEffects';

interface AboutSectionProps {
  isDark: boolean;
  onOpenVCard: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDark, onOpenVCard }) => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'teaching' | 'goals'>('philosophy');

  const tabs = [
    { id: 'philosophy' as const, label: 'Mening Falsafam', icon: Lightbulb },
    { id: 'teaching' as const, label: 'Ta‘lim & Metodologiya', icon: BookOpen },
    { id: 'goals' as const, label: 'Kelajak Maqsadlarim', icon: Target },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-tech font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 // Tanishing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-4">
            Men Haqimda
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Fizikaning fundamental qonunlarini raqamli texnologiyalar, mikrokontrollerlar va sun’iy intellekt bilan birlashtiruvchi ko‘p qirrali innovator.
          </p>
        </div>

        {/* Main Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Bio & Interactive Story Tabs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Story Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md mb-6 ${
              isDark 
                ? 'bg-slate-900/70 border-cyan-500/20 shadow-xl' 
                : 'bg-white/85 border-sky-200 shadow-lg'
            }`}>
              
              {/* Tab Selector */}
              <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-950/40 border border-slate-800 mb-6 overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        playTechClick(750, 0.04);
                        setActiveTab(tab.id);
                      }}
                      className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/30'
                          : isDark
                            ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              {activeTab === 'philosophy' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-display text-cyan-400 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    Nazariya, Apparat va Kod Uchburchagi
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Ko‘pchilik dasturchilar faqat ekrandagi piksellar bilan cheklanadi, apparat muhandislari esa ko‘pincha dasturiy qismni murakkab deb biladi. Men esa bu ikki dunyo o‘rtasidagi ko‘prikman.
                  </p>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Fizika menga tabiatning fundamental qonunlarini — zaryadlar harakati, elektromagnit induksiya, mexanik muvozanat va to‘lqinlar tabiatini o‘rgatdi. C++, Python va zamonaviy web texnologiyalar esa bu qonunlarni real qurilmalarga, aqlli robotlarga va avtonom tizimlarga aylantirish vositasidir.
                  </p>
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className={`p-3 rounded-xl border text-xs ${
                      isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      <strong className="text-cyan-400 block mb-1">Fundamental Asos:</strong>
                      Fizik qonunlar bexato ishlaydi. To‘g‘ri hisoblangan sxema hech qachon ishdan chiqmaydi.
                    </div>
                    <div className={`p-3 rounded-xl border text-xs ${
                      isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      <strong className="text-indigo-400 block mb-1">Amaliy Tatbiq:</strong>
                      Har bir formulani amalda ko‘rish mumkin — svetodiod nuridan tortib avtonom robotgacha.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'teaching' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-display text-cyan-400 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    STEAM: Qiziqarli va Jonli Fizika
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Fizika darsi zerikarli formulalar daftari bo‘lmasligi kerak. Mening o‘quvchilarim Ohm qonunini o‘rganganda o‘z qo‘llari bilan zanjir yig‘ishadi, Nyuton mexanikasini o‘rganganda esa harakatlanuvchi robotlar yasashadi.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {[
                      "3D virtual simulyatsiyalar yordamida ko‘rinmas to‘lqin va zaryadlarni vizuallashtirish",
                      "Olimpiada masalalarini nostandart mantiqiy yondashuv bilan yechish",
                      "O‘quvchilarni kichik yoshdanoq innovatsion startaplar yaratishga o‘rgatish",
                      "650 dan ortiq yoshlarning fizika va muhandislikka muhabbatini uyg‘otish"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'goals' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-display text-cyan-400 flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyan-400" />
                    Kelajak Missiyasi & Startap Loyihalar
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Mening bosh maqsadim — O‘zbekistonda mahalliy robototexnika va bionika laboratoriyasini kengaytirish, qishloq xo‘jaligi hamda tibbiyot uchun hamyonbop va sifatli avtomatlashtirilgan qurilmalar ishlab chiqarish.
                  </p>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="font-bold text-cyan-400">1. Arzon Bionik Protezlar:</span>
                      <p className={`mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Ehtiyojmand insonlar uchun 3D bosilgan va EMG datchiklar bilan ishlovchi funksional protezlarni ommalashtirish.
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="font-bold text-indigo-400">2. Milliy STEAM Texnoparki:</span>
                      <p className={`mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Minglab yoshlarni fizika, robototexnika va sun’iy intellekt bo‘yicha global musobaqalarga tayyorlaydigan ekotizim yaratish.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Quick Personal Attributes / Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Yoshi", value: "23 yosh", icon: Sparkles },
                { label: "Manzil", value: "Toshkent", icon: Compass },
                { label: "Ishlash formati", value: "Gibrid / Online", icon: Cpu },
                { label: "Daraja", value: "Innovator", icon: Award },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={`p-3 rounded-xl border text-center ${
                    isDark ? 'bg-slate-900/60 border-cyan-500/15' : 'bg-white border-sky-100 shadow-sm'
                  }`}>
                    <Icon className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                    <div className="text-[10px] text-slate-400 uppercase font-tech">{item.label}</div>
                    <div className={`text-xs font-bold mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right: Key Competencies & Interactive vCard Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* 4 Pillars Card */}
            <div className={`p-6 rounded-2xl border backdrop-blur-md ${
              isDark 
                ? 'bg-slate-900/70 border-cyan-500/20 shadow-xl' 
                : 'bg-white/85 border-sky-200 shadow-lg'
            }`}>
              <h3 className="text-base font-bold font-display uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                Asosiy 4 ta Ustun
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    num: "01",
                    title: "Nazariy & Fundamental Fizika",
                    desc: "Elektrodinamika, mayatniklar, kvant optikasi va formulalar aniqligi.",
                    color: "border-cyan-500/30 text-cyan-400"
                  },
                  {
                    num: "02",
                    title: "Apparat & Mikrokontrollerlar",
                    desc: "Arduino, ESP32, Lidar, sensorlar, PCB loyihalash va lehimlash mahorati.",
                    color: "border-sky-500/30 text-sky-400"
                  },
                  {
                    num: "03",
                    title: "Dasturiy Kod & Sun'iy Idrok",
                    desc: "Python, C++, OpenCV kompyuter ko'rishi, algoritmlar va asinxron backend.",
                    color: "border-indigo-500/30 text-indigo-400"
                  },
                  {
                    num: "04",
                    title: "Pedagogik Mahorat & Murabbiylik",
                    desc: "Murakkab mavzularni oson va qiziqarli qilib yoshlarga tushuntira olish san'ati.",
                    color: "border-purple-500/30 text-purple-400"
                  }
                ].map((pillar, i) => (
                  <div key={i} className={`p-3.5 rounded-xl border transition-all hover:translate-x-1 ${
                    isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center gap-3">
                      <span className="font-tech font-bold text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {pillar.num}
                      </span>
                      <div>
                        <h4 className={`text-sm font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          {pillar.title}
                        </h4>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Digital Business Card Trigger */}
            <div className={`p-6 rounded-2xl border text-center ${
              isDark 
                ? 'bg-gradient-to-br from-cyan-950/40 via-slate-900 to-indigo-950/40 border-cyan-500/30' 
                : 'bg-gradient-to-br from-sky-50 via-white to-indigo-50 border-sky-300'
            }`}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="text-base font-bold font-display mb-1">
                Raqamli Tashrif Qog‘ozi (vCard)
              </h4>
              <p className={`text-xs mb-4 max-w-xs mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Shohrux Obbosxonovning kontaktlarini bir bosishda telefoningizga saqlab oling.
              </p>
              <button
                onClick={() => {
                  playTechClick(820, 0.05);
                  onOpenVCard();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Tashrif qog‘ozini ko‘rish & yuklab olish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
