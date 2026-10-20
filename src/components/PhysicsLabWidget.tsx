import React, { useState, useEffect, useRef } from 'react';
import { 
  Atom, 
  Zap, 
  Activity, 
  Flame, 
  Sliders, 
  RotateCcw, 
  Info,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { playTechClick } from '../utils/soundEffects';

interface PhysicsLabWidgetProps {
  isDark: boolean;
}

export const PhysicsLabWidget: React.FC<PhysicsLabWidgetProps> = ({ isDark }) => {
  const [labMode, setLabMode] = useState<'ohm' | 'pendulum'>('ohm');

  // Ohm's law state
  const [voltage, setVoltage] = useState(12); // Volts
  const [resistance, setResistance] = useState(100); // Ohms
  const currentAmp = voltage / resistance; // Amperes
  const currentMilliAmp = currentAmp * 1000;
  const powerWatt = voltage * currentAmp; // Watts

  // Pendulum state
  const [stringLength, setStringLength] = useState(1.0); // meters
  const [gravityPreset, setGravityPreset] = useState<'earth' | 'moon' | 'mars' | 'jupiter'>('earth');
  const gravities = {
    earth: { name: 'Yer', g: 9.81 },
    moon: { name: 'Oy', g: 1.62 },
    mars: { name: 'Mars', g: 3.72 },
    jupiter: { name: 'Yupiter', g: 24.79 },
  };
  const g = gravities[gravityPreset].g;
  const period = 2 * Math.PI * Math.sqrt(stringLength / g);
  const frequency = 1 / period;

  // Animation Canvas for Circuit & Pendulum
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.03;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      if (labMode === 'ohm') {
        // Draw Circuit
        const padX = 50;
        const padY = 40;
        const rectW = width - padX * 2;
        const rectH = height - padY * 2;

        // Wire track
        ctx.strokeStyle = isDark ? '#334155' : '#cbd5e1';
        ctx.lineWidth = 4;
        ctx.strokeRect(padX, padY, rectW, rectH);

        // Battery symbol on left
        const midY = height / 2;
        ctx.fillStyle = isDark ? '#0284c7' : '#0284c7';
        ctx.fillRect(padX - 8, midY - 22, 16, 44);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px "JetBrains Mono"';
        ctx.fillText(`${voltage}V`, padX - 18, midY + 36);

        // Resistor on right
        ctx.fillStyle = powerWatt > 1.5 ? '#ef4444' : '#10b981';
        ctx.fillRect(padX + rectW - 10, midY - 25, 20, 50);
        ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
        ctx.fillText(`${resistance}Ω`, padX + rectW - 18, midY + 40);

        // LED lightbulb at top
        const midX = width / 2;
        const brightness = Math.min(1, currentAmp * 4);
        ctx.beginPath();
        ctx.arc(midX, padY, 14, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250, 204, 21, ${0.2 + brightness * 0.8})`;
        ctx.shadowColor = '#facc15';
        ctx.shadowBlur = brightness * 25;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = isDark ? '#e2e8f0' : '#334155';
        ctx.font = '10px "JetBrains Mono"';
        ctx.fillText("LED Lampochka", midX - 35, padY - 20);

        // Moving electrons along wire perimeter
        const perimeter = 2 * (rectW + rectH);
        const speed = Math.min(12, Math.max(1, currentAmp * 40));
        const electronCount = 20;

        for (let i = 0; i < electronCount; i++) {
          const progress = ((t * speed * 25 + (i * perimeter) / electronCount) % perimeter);
          let ex = padX;
          let ey = padY;

          if (progress < rectW) {
            // Top wire (left to right)
            ex = padX + progress;
            ey = padY;
          } else if (progress < rectW + rectH) {
            // Right wire (top to bottom)
            ex = padX + rectW;
            ey = padY + (progress - rectW);
          } else if (progress < 2 * rectW + rectH) {
            // Bottom wire (right to left)
            ex = padX + rectW - (progress - (rectW + rectH));
            ey = padY + rectH;
          } else {
            // Left wire (bottom to top)
            ex = padX;
            ey = padY + rectH - (progress - (2 * rectW + rectH));
          }

          ctx.beginPath();
          ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.fill();
        }
      } else {
        // Draw Mathematical Pendulum
        const originX = width / 2;
        const originY = 35;
        const maxAngle = 0.55; // radians (~30 deg)
        const omega = Math.sqrt(g / stringLength);
        const currentAngle = maxAngle * Math.cos(omega * t);

        const visualLength = 70 + stringLength * 55;
        const bobX = originX + visualLength * Math.sin(currentAngle);
        const bobY = originY + visualLength * Math.cos(currentAngle);

        // Pivot mount
        ctx.fillStyle = isDark ? '#64748b' : '#94a3b8';
        ctx.fillRect(originX - 25, originY - 10, 50, 10);

        // String
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(bobX, bobY);
        ctx.strokeStyle = isDark ? '#38bdf8' : '#0284c7';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Oscillating Bob
        ctx.beginPath();
        ctx.arc(bobX, bobY, 18, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#06b6d4' : '#0284c7';
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Energy Indicator
        const kineticFraction = Math.pow(Math.sin(omega * t), 2);
        const potentialFraction = 1 - kineticFraction;

        ctx.font = '10px "JetBrains Mono"';
        ctx.fillStyle = isDark ? '#94a3b8' : '#475569';
        ctx.fillText(`Kinetik Energiya: ${Math.round(kineticFraction * 100)}%`, 20, height - 30);
        ctx.fillText(`Potensial Energiya: ${Math.round(potentialFraction * 100)}%`, 20, height - 15);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [labMode, voltage, resistance, stringLength, g, isDark, powerWatt, currentAmp]);

  return (
    <section id="lab" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-tech font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <Atom className="w-3.5 h-3.5" />
            <span>04 // Jonli Tajriba</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-4">
            Fizika & Sxemotexnika Interaktiv Laboratoriyasi
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Fizika qonunlarini formulada emas, jonli simulyatsiyada his qiling! Slayderlarni surib, zanjirdagi tok va mayatnik tebranishini o‘zgartiring.
          </p>

          {/* Mode Switcher */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => {
                playTechClick(750, 0.04);
                setLabMode('ohm');
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                labMode === 'ohm'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30'
                  : isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Ohm Qonuni & Elektr Zanjiri</span>
            </button>

            <button
              onClick={() => {
                playTechClick(750, 0.04);
                setLabMode('pendulum');
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                labMode === 'pendulum'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30'
                  : isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Mayatnik & Tebranish Davri</span>
            </button>
          </div>
        </div>

        {/* Lab Simulator Body */}
        <div className={`rounded-3xl border p-6 sm:p-8 backdrop-blur-md ${
          isDark 
            ? 'bg-slate-900/80 border-cyan-500/30 shadow-2xl shadow-cyan-950/30' 
            : 'bg-white/90 border-sky-200 shadow-xl shadow-sky-900/10'
        }`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Canvas (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950 p-2 shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={560}
                  height={320}
                  className="w-full h-[280px] sm:h-[320px] rounded-xl block"
                />
                
                {/* Overlay live telemetry badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md border border-cyan-500/30 text-[11px] font-tech text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>SIMULYATSIYA FAOL • 60 FPS</span>
                </div>
              </div>

              <div className="w-full flex items-center justify-between text-xs font-tech text-slate-400 mt-3 px-2">
                <span>{labMode === 'ohm' ? 'Elektronlar oqimi tezligi tok kuchiga mutanosib' : 'Garmonik tebranish dinamikasi'}</span>
                <span className="text-cyan-400">Fizika Qonunlari 100% Real</span>
              </div>
            </div>

            {/* Controls & Calculations (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {labMode === 'ohm' ? (
                // Ohm's law controls
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h3 className="text-base font-bold font-display text-cyan-400 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      Ohm Qonuni: I = U / R
                    </h3>
                    <span className="text-xs font-tech px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      P = U · I
                    </span>
                  </div>

                  {/* Voltage Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1.5">
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Kuchlanish (U):</span>
                      <span className="font-tech text-cyan-400 font-bold">{voltage} Volt</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="24"
                      step="1"
                      value={voltage}
                      onChange={(e) => {
                        setVoltage(Number(e.target.value));
                        playTechClick(500 + Number(e.target.value) * 15, 0.02);
                      }}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-tech">
                      <span>1V</span>
                      <span>12V (Akkumulyator)</span>
                      <span>24V (Sanoat)</span>
                    </div>
                  </div>

                  {/* Resistance Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1.5">
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Qarshilik (R):</span>
                      <span className="font-tech text-cyan-400 font-bold">{resistance} Om</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="10"
                      value={resistance}
                      onChange={(e) => {
                        setResistance(Number(e.target.value));
                        playTechClick(900 - Number(e.target.value) * 0.5, 0.02);
                      }}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-tech">
                      <span>10Ω (Kichik)</span>
                      <span>100Ω</span>
                      <span>500Ω (Katta)</span>
                    </div>
                  </div>

                  {/* Live Results Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="text-[10px] uppercase font-tech text-slate-400 block">Tok Kuchi (I)</span>
                      <span className="text-xl font-bold font-tech text-cyan-400">
                        {currentMilliAmp < 1000 ? `${currentMilliAmp.toFixed(0)} mA` : `${currentAmp.toFixed(2)} A`}
                      </span>
                    </div>

                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="text-[10px] uppercase font-tech text-slate-400 block">Ajralgan Quvvat (P)</span>
                      <span className={`text-xl font-bold font-tech ${powerWatt > 1.5 ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {powerWatt.toFixed(2)} Vt
                      </span>
                    </div>
                  </div>

                  {/* Teacher's Note */}
                  <div className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                    powerWatt > 1.5 
                      ? 'bg-rose-950/20 border-rose-500/30 text-rose-300' 
                      : isDark ? 'bg-cyan-950/20 border-cyan-500/20 text-cyan-300' : 'bg-sky-50 border-sky-200 text-sky-800'
                  }`}>
                    {powerWatt > 1.5 ? <Flame className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" /> : <Info className="w-4 h-4 shrink-0 text-cyan-400 mt-0.5" />}
                    <div>
                      {powerWatt > 1.5 
                        ? "Ogohlantirish: Quvvat 1.5W dan oshdi! Rezistor qiziydi — amaliyotda radiator kerak."
                        : "Fizik qoida: Qarshilik kamaysa, tok kuchi va zanjirda ajraladigan quvvat keskin oshadi."
                      }
                    </div>
                  </div>
                </div>
              ) : (
                // Pendulum controls
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h3 className="text-base font-bold font-display text-cyan-400 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      Tebranish Davri: T = 2π√(L/g)
                    </h3>
                  </div>

                  {/* String Length Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1.5">
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Ip Uzunligi (L):</span>
                      <span className="font-tech text-cyan-400 font-bold">{stringLength.toFixed(2)} metr</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="2.5"
                      step="0.05"
                      value={stringLength}
                      onChange={(e) => {
                        setStringLength(Number(e.target.value));
                        playTechClick(600, 0.02);
                      }}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  {/* Planet Gravity Selector */}
                  <div>
                    <span className="text-xs font-semibold block mb-2">Sayyora gravitatsiyasi:</span>
                    <div className="grid grid-cols-4 gap-1.5">
                      {(['earth', 'moon', 'mars', 'jupiter'] as const).map((planet) => (
                        <button
                          key={planet}
                          onClick={() => {
                            playTechClick(780, 0.04);
                            setGravityPreset(planet);
                          }}
                          className={`py-1.5 px-2 rounded-lg text-xs font-tech font-semibold transition-all border ${
                            gravityPreset === planet
                              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                              : isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          {gravities[planet].name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Results */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="text-[10px] uppercase font-tech text-slate-400 block">Tebranish Davri (T)</span>
                      <span className="text-xl font-bold font-tech text-cyan-400">
                        {period.toFixed(2)} soniya
                      </span>
                    </div>

                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="text-[10px] uppercase font-tech text-slate-400 block">Chastota (ν)</span>
                      <span className="text-xl font-bold font-tech text-indigo-400">
                        {frequency.toFixed(2)} Gts
                      </span>
                    </div>
                  </div>

                  {/* Pedagogical Note */}
                  <div className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                    isDark ? 'bg-cyan-950/20 border-cyan-500/20 text-cyan-300' : 'bg-sky-50 border-sky-200 text-sky-800'
                  }`}>
                    <Sparkles className="w-4 h-4 shrink-0 text-cyan-400 mt-0.5" />
                    <div>
                      Fizik xulosa: Tebranish davri mayatnik massasiga bog‘liq emas! Faqat ip uzunligi (L) va gravitatsiya (g) hal qiladi.
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
