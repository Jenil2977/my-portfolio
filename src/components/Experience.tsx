import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Milestone } from "lucide-react";
import { resumeData } from "../data/resume";

export const Experience: React.FC = () => {
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
        <div className="relative border-l border-white/10 pl-6 md:pl-8 ml-4 space-y-12">
          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#0a0b10] border-2 border-gold-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,163,89,0.3)]">
                <Milestone size={10} className="text-gold-500" />
              </div>

              {/* Card content */}
              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-100 group-hover:text-gold-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center space-x-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                      <Calendar size={12} className="text-gold-500" />
                      <span>
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </span>
                    <span className="flex items-center space-x-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                      <MapPin size={12} className="text-gold-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Highlights description list */}
                <ul className="space-y-2.5 mb-6 text-sm text-gray-400 leading-relaxed">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-3 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges utilized */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-2">
                    Skills Showcased
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded"
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
