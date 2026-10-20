import React, { useState } from 'react';
import { 
  FolderGit2, 
  Bot, 
  Cpu, 
  Globe, 
  Sparkles, 
  Atom, 
  ExternalLink, 
  Code, 
  Layers, 
  CheckCircle2, 
  X, 
  Copy, 
  Check, 
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { playTechClick } from '../utils/soundEffects';

interface ProjectsSectionProps {
  isDark: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const categories = [
    { id: 'all', label: 'Barcha Loyihalar' },
    { id: 'robotics', label: 'Robototexnika', icon: Bot },
    { id: 'iot', label: 'IoT & Avtomatika', icon: Cpu },
    { id: 'ai', label: 'Sun‘iy Intellekt', icon: Sparkles },
    { id: 'physics', label: 'Fizika & Ta‘lim', icon: Atom },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleCopyCode = (code: string) => {
    playTechClick(850, 0.05);
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-tech font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>05 // Portfoliom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-4">
            Mening Loyihalarim & Ixtirolarim
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Amaliy apparat qurilmalari, IoT tizimlari, robotik platformalar va dasturiy yechimlardan namunalar.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playTechClick(720, 0.04);
                  setActiveCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  activeCategory === cat.id
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 glass-card-hover group ${
                isDark 
                  ? 'bg-slate-900/75 border-cyan-500/20 hover:border-cyan-400/50 shadow-xl shadow-cyan-950/20' 
                  : 'bg-white/90 border-sky-200 hover:border-sky-400 shadow-lg shadow-sky-900/5'
              }`}
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-tech font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                    {project.categoryLabel}
                  </span>

                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/80 text-white backdrop-blur-md flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      Tanlangan
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-lg font-bold font-display tracking-tight mb-2 group-hover:text-cyan-400 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-1.5 py-2.5 mb-4 border-y border-slate-800/50 text-[11px] font-tech text-center">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-slate-500 text-[10px] truncate">{m.label}</div>
                        <div className="font-bold text-cyan-400 truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] px-2 py-0.5 rounded font-tech ${
                          isDark 
                            ? 'bg-slate-950/80 border border-slate-800 text-slate-300' 
                            : 'bg-slate-100 border border-slate-200 text-slate-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    playTechClick(800, 0.05);
                    setSelectedProject(project);
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all border ${
                    isDark 
                      ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400' 
                      : 'bg-sky-50 border-sky-200 text-sky-800 hover:bg-sky-100 hover:border-sky-300'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Batafsil & Sxemani ko‘rish</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
            isDark 
              ? 'bg-slate-900 border-cyan-500/30 text-slate-100 shadow-2xl shadow-cyan-950/50' 
              : 'bg-white border-sky-300 text-slate-900 shadow-2xl shadow-sky-900/20'
          }`}>
            
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="mb-4">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-tech font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold font-display mt-2">
                {selectedProject.title}
              </h3>
            </div>

            {/* Full description */}
            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {selectedProject.fullDescription}
            </p>

            {/* Hardware Schematic Summary */}
            {selectedProject.schematicSummary && (
              <div className="mb-6">
                <h4 className="text-xs font-tech font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Apparat & Sxemotexnika Arxitekturasi (Pinout)
                </h4>
                <div className={`p-3.5 rounded-xl border text-xs font-tech leading-relaxed ${
                  isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-800'
                }`}>
                  {selectedProject.schematicSummary}
                </div>
              </div>
            )}

            {/* Code Snippet Preview */}
            {selectedProject.codeSnippet && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-tech font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <Code className="w-4 h-4 text-cyan-400" />
                    Asosiy Algoritm Kodingi ({selectedProject.codeSnippet.language})
                  </h4>
                  <button
                    onClick={() => handleCopyCode(selectedProject.codeSnippet!.code)}
                    className="flex items-center gap-1 text-[11px] font-tech text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSnippet ? "Nusxalandi!" : "Kodni nusxalash"}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-tech text-cyan-300 overflow-x-auto">
                  <code>{selectedProject.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {/* Metrics */}
            <div className="mb-6">
              <h4 className="text-xs font-tech font-bold uppercase tracking-wider text-cyan-400 mb-2">
                Texnik Parametrlar & Natija
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border text-center ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                    <div className="text-sm font-bold text-cyan-400 font-tech mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800/40 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 transition-all"
              >
                Yopish
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
