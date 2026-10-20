import React from 'react';
import { 
  Sparkles, 
  Atom, 
  Bot, 
  Cpu, 
  Globe, 
  Zap, 
  Check, 
  ArrowRight, 
  Clock, 
  Users,
  Briefcase
} from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';
import { playTechClick } from '../utils/soundEffects';

interface ServicesSectionProps {
  isDark: boolean;
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ isDark, onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return Atom;
      case 'Bot': return Bot;
      case 'Cpu': return Cpu;
      case 'Globe': return Globe;
      case 'Zap': return Zap;
      case 'Sparkles': return Sparkles;
      default: return Briefcase;
    }
  };

  const handleServiceSelect = (title: string) => {
    playTechClick(850, 0.05);
    onSelectService(title);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-tech font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>06 // Xizmatlarim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-4">
            Taklif Qiladigan Xizmatlarim
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Fizika ta’limi, robototexnika kurslari, buyurtma asosida aqlli elektronika tizimlari va zamonaviy veb-saytlar.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {SERVICES.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 glass-card-hover group ${
                  service.popular
                    ? isDark
                      ? 'bg-slate-900/85 border-cyan-400/50 shadow-xl shadow-cyan-950/30'
                      : 'bg-white border-sky-400 shadow-xl shadow-sky-900/10'
                    : isDark
                      ? 'bg-slate-900/70 border-cyan-500/20 shadow-lg shadow-cyan-950/15'
                      : 'bg-white/85 border-sky-200 shadow-md shadow-sky-900/5'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-tech font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/30">
                    Ommabop
                  </div>
                )}

                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-tech font-semibold text-cyan-400 uppercase">
                        {service.category}
                      </span>
                      <h3 className={`text-base font-bold font-display leading-snug ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className={`text-xs leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {service.shortDesc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Footer metadata: Target audience & Delivery */}
                  <div className={`p-3 rounded-xl border text-[11px] mb-4 space-y-1.5 ${
                    isDark ? 'bg-slate-950/70 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate"><strong>Mo‘ljal:</strong> {service.targetAudience}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span><strong>Muddat:</strong> {service.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Select / Order Button */}
                  <button
                    onClick={() => handleServiceSelect(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <span>Maslahat olish / Buyurtma</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
