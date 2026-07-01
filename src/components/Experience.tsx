import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Globe } from "lucide-react";
import { resumeData } from "../data/resume";

export const Experience: React.FC = () => {
  // Helper to get formatted duration strings
  const getDuration = (company: string) => {
    if (company.includes("Su-kEm")) return "2 Mos";
    if (company.includes("iKraft")) return "2 Mos";
    return "";
  };

  return (
    <section id="experience" className="relative py-24 bg-[#0a0b10]">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            History
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-[2px] bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 md:pl-8 ml-4 space-y-12">
          {/* Glowing pathway track */}
          <div className="absolute left-[3px] md:left-[11px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-gold-500 via-purple-500 to-indigo-950/20 opacity-30 pointer-events-none" />

          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-2.5 w-4 h-4 rounded-full bg-[#0a0b10] border-2 border-gold-500 flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(212,163,89,0.4)] z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:bg-gold-300" />
              </div>

              {/* Card content */}
              <div className="premium-card p-6 md:p-8 rounded-2xl border border-white/5 transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-100 group-hover:text-gold-400 transition-colors duration-300 flex items-center gap-2">
                      <span>{exp.role}</span>
                      {exp.isRemote && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/30 border border-emerald-800/30 px-2 py-0.5 rounded-full">
                          <Globe size={9} />
                          <span>Remote</span>
                        </span>
                      )}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-500">
                    <span className="flex items-center space-x-1 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                      <Calendar size={11} className="text-gold-500" />
                      <span>
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </span>
                    <span className="flex items-center space-x-1 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                      <Clock size={11} className="text-gold-500" />
                      <span>{getDuration(exp.company)}</span>
                    </span>
                    <span className="flex items-center space-x-1 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                      <MapPin size={11} className="text-gold-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Highlights description list */}
                <ul className="space-y-3 mb-6 text-sm text-gray-400 leading-relaxed">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-3 shrink-0 animate-pulse" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges utilized */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-2.5">
                    Skills Showcased
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded hover:border-gold-500/20 hover:text-gold-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
