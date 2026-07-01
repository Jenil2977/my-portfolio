import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Sparkles, CheckCircle2, X, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { resumeData, type ProjectItem } from "../data/resume";

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  // Close modal on escape keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const headerBackgrounds = [
    "from-violet-600/30 to-indigo-950",
    "from-gold-600/30 to-amber-950/70",
    "from-cyan-600/30 to-slate-950"
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#0a0b10]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-[2px] bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="premium-card rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full group"
            >
              {/* Card visual header */}
              <div className={`relative h-48 bg-gradient-to-br ${headerBackgrounds[idx % headerBackgrounds.length]} border-b border-white/5 flex items-center justify-center p-6 overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                <div className="absolute top-4 left-4 flex items-center space-x-2 text-[9px] tracking-widest text-gold-400 font-bold uppercase">
                  <Cpu size={12} className="animate-spin" style={{ animationDuration: "12s" }} />
                  <span>{proj.date} Project</span>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-2 z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-extrabold text-lg text-white group-hover:text-gold-200 transition-colors">
                    {proj.title}
                  </h4>
                </div>
              </div>

              {/* Card body content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Badges */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-bold text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="text-[9px] font-bold text-gold-400 bg-gold-950/20 border border-gold-800/30 px-2.5 py-1 rounded uppercase tracking-wider">
                        +{proj.technologies.length - 4} More
                      </span>
                    )}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 mt-auto">
                  <button
                    onClick={() => setActiveProject(proj)}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-gold-500/30 text-gray-300 hover:text-gold-400 transition-all text-xs font-semibold cursor-pointer"
                  >
                    <span>Case Study</span>
                  </button>
                  <a
                    href={proj.liveUrl || proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-dark transition-all text-xs font-bold shadow-md shadow-gold-500/5 hover:shadow-gold-500/10 cursor-pointer"
                  >
                    <ExternalLink size={13} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#030305]/85 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="glass-panel w-full max-w-3xl rounded-3xl border border-white/10 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 md:p-8 bg-gradient-to-r from-dark-card to-dark border-b border-white/5 flex items-center justify-between shrink-0">
                <div>
                  <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest">
                    Project Case Study • {activeProject.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow custom-scrollbar">
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Grid of Problem, Solution, Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                  {/* Problem Card */}
                  <div className="p-5 rounded-2xl bg-red-950/10 border border-red-900/20 space-y-3">
                    <div className="flex items-center space-x-2 text-red-400">
                      <AlertCircle size={16} />
                      <h4 className="text-xs font-bold uppercase tracking-wider">The Challenge</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Solution Card */}
                  <div className="p-5 rounded-2xl bg-indigo-950/15 border border-indigo-900/20 space-y-3">
                    <div className="flex items-center space-x-2 text-indigo-400">
                      <Lightbulb size={16} />
                      <h4 className="text-xs font-bold uppercase tracking-wider">The Architecture</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {activeProject.solution}
                    </p>
                  </div>

                  {/* Result Card */}
                  <div className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-900/20 space-y-3">
                    <div className="flex items-center space-x-2 text-emerald-400">
                      <TrendingUp size={16} />
                      <h4 className="text-xs font-bold uppercase tracking-wider">Key Impact</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {activeProject.result}
                    </p>
                  </div>
                </div>

                {/* Key Technical Implementations */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
                    Engineering Highlights
                  </h4>
                  <ul className="space-y-3">
                    {activeProject.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-xs text-gray-300 leading-relaxed font-normal">
                        <CheckCircle2 size={14} className="text-gold-500 mr-3 mt-0.5 shrink-0 animate-pulse" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 md:p-8 bg-dark border-t border-white/5 flex items-center justify-end space-x-4 shrink-0">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-xs font-bold text-gray-300 hover:text-white transition-all cursor-pointer"
                >
                  <FaGithub size={14} />
                  <span>Repository</span>
                </a>
                <a
                  href={activeProject.liveUrl || activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-dark text-xs font-bold shadow-md shadow-gold-500/10 cursor-pointer"
                >
                  <ExternalLink size={14} />
                  <span>Demo Launch</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
