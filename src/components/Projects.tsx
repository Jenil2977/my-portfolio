import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { resumeData } from "../data/resume";

export const Projects: React.FC = () => {
  // Array of aesthetic backgrounds for project headers
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
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full group hover:border-gold-500/20 transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-gold-500/5"
            >
              {/* Card visual header (Mock screenshot background) */}
              <div className={`relative h-48 bg-gradient-to-br ${headerBackgrounds[idx % headerBackgrounds.length]} border-b border-white/5 flex items-center justify-center p-6 overflow-hidden`}>
                {/* Tech icon graphics */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                <div className="absolute top-4 left-4 flex items-center space-x-2 text-[10px] tracking-widest text-gold-400 font-bold uppercase">
                  <Cpu size={12} className="animate-spin" style={{ animationDuration: "10s" }} />
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

                {/* Bullet points of capabilities */}
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {proj.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-gray-400 leading-relaxed">
                        <CheckCircle2 size={13} className="text-gold-500 mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 mt-auto">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all text-xs font-semibold"
                  >
                    <FaGithub size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={proj.liveUrl || proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-dark transition-all text-xs font-bold shadow-md shadow-gold-500/5 hover:shadow-gold-500/10"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
