import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, FileCode2 } from "lucide-react";
import { resumeData } from "../data/resume";

export const About: React.FC = () => {
  const stats = [
    {
      icon: <Briefcase className="text-gold-500" size={24} />,
      title: "Internships",
      value: `${resumeData.experience.length} Developer Roles`,
      description: "Python & Java Developer"
    },
    {
      icon: <FileCode2 className="text-gold-500" size={24} />,
      title: "Projects",
      value: `${resumeData.projects.length} AI & Full-Stack`,
      description: "FastAPI, React, RAGs"
    },
    {
      icon: <Award className="text-gold-500" size={24} />,
      title: "Certifications",
      value: `${resumeData.certifications.length} Professional`,
      description: "Anthropic, simplilearn"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0a0b10] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-gold-500 font-semibold"
          >
            Biography
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-2 tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-[2px] bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Biography & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio Card */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-xl font-semibold text-white">Who I Am</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {resumeData.profile.about}
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-gold-500" size={28} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="space-y-4 border-l-2 border-gold-500/20 pl-4 ml-1">
                  <div>
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-1">
                      <h4 className="font-bold text-gray-200 text-base md:text-lg">
                        {edu.institution}
                      </h4>
                      <span className="text-xs font-semibold text-gold-400 bg-gold-950/40 border border-gold-800/30 px-3 py-1 rounded-full">
                        {edu.startDate} – {edu.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      {edu.degree} in {edu.fieldOfStudy}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{edu.location}</p>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 flex items-start space-x-4 glass-panel-hover"
              >
                <div className="p-3 bg-gold-950/20 border border-gold-800/30 rounded-xl">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                    {stat.title}
                  </h4>
                  <p className="text-2xl font-bold text-gray-100 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{stat.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Subtle callout card */}
            <div className="glass-panel p-6 rounded-2xl border border-dashed border-white/10 flex flex-col justify-center text-center space-y-2">
              <p className="text-xs text-gold-400 font-bold uppercase tracking-widest">Core Values</p>
              <p className="text-sm font-semibold text-gray-300 italic">
                "Writing optimized APIs and building clean pipelines to power intelligent machine learning models."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
