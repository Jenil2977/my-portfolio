import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Briefcase, FileCode2, FileDown, Heart, Terminal, Shield } from "lucide-react";
import { resumeData } from "../data/resume";

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bio" | "philosophy" | "pillars">("bio");

  const stats = [
    {
      icon: <Briefcase className="text-gold-500" size={22} />,
      title: "Internships",
      value: `${resumeData.experience.length} Developer Roles`,
      description: "Python & Java Internships"
    },
    {
      icon: <FileCode2 className="text-gold-500" size={22} />,
      title: "Projects",
      value: `${resumeData.projects.length} AI & Full-Stack`,
      description: "FastAPI, React, RAGs"
    },
    {
      icon: <Award className="text-gold-500" size={22} />,
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
          
          {/* Left Column: Interactive Storytelling Tabs & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Tabs Selector Card */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="flex space-x-1 border-b border-white/5 pb-2">
                {[
                  { id: "bio", label: "Who I Am", icon: <Terminal size={14} /> },
                  { id: "philosophy", label: "My Philosophy", icon: <Heart size={14} /> },
                  { id: "pillars", label: "Core Pillars", icon: <Shield size={14} /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-gold-400 bg-gold-950/20 border border-gold-800/30"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="min-h-[140px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === "bio" && (
                    <motion.div
                      key="bio"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 text-sm md:text-base leading-relaxed space-y-4"
                    >
                      <p>{resumeData.profile.about}</p>
                    </motion.div>
                  )}

                  {activeTab === "philosophy" && (
                    <motion.div
                      key="philosophy"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 text-sm md:text-base leading-relaxed space-y-4"
                    >
                      <p className="italic font-medium text-gray-300 leading-relaxed">
                        "I believe in building clean, self-documenting APIs and backend pipelines that connect semantic data and AI models seamlessly. Code should be written for human scalability and machine optimization."
                      </p>
                      <p>
                        My development journey is driven by a curiosity for parsing raw data, building intelligent query systems (like Retrieval-Augmented Generation), and reducing performance bottlenecks in production REST services.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "pillars" && (
                    <motion.div
                      key="pillars"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 text-sm md:text-base leading-relaxed space-y-3"
                    >
                      <div className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                        <span><strong className="text-gray-300 font-semibold">Backend Orchestration:</strong> Scalable MVC schemas, Django ORM query optimization, and DRF microservices.</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                        <span><strong className="text-gray-300 font-semibold">Semantic Vector Space:</strong> FAISS indexing, Sentence Transformers, SpaCy NLP entity parsing, and RAG pipelines.</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                        <span><strong className="text-gray-300 font-semibold">Reliable Architecture:</strong> Automated unit testing with pytest and JUnit, Git workflows, and Agile delivery.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {resumeData.profile.resumeUrl && (
                  <div className="pt-6 border-t border-white/5 mt-6">
                    <a
                      href={resumeData.profile.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-gold-500/20 hover:border-gold-500 bg-gold-950/10 hover:bg-gold-500 hover:text-dark text-gold-400 font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md shadow-gold-500/5 hover:shadow-gold-500/10"
                    >
                      <FileDown size={14} />
                      <span>Download Resume</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-gold-500" size={24} />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="space-y-4 border-l-2 border-gold-500/20 pl-4 ml-1">
                  <div>
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-1">
                      <h4 className="font-bold text-gray-200 text-base md:text-lg">
                        {edu.institution}
                      </h4>
                      <span className="text-[10px] font-bold text-gold-400 bg-gold-950/40 border border-gold-800/30 px-3 py-1 rounded-full uppercase tracking-wider">
                        {edu.startDate} – {edu.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      {edu.degree} in {edu.fieldOfStudy}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{edu.location}</p>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-2">
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[10px] font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 hover:border-gold-500/20 transition-colors"
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
                className="premium-card p-6 rounded-2xl border border-white/5 flex items-start space-x-4 animate-float-slow"
                style={{ animationDelay: `${idx * 1.5}s` }}
              >
                <div className="p-3 bg-gold-950/20 border border-gold-800/30 rounded-xl shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    {stat.title}
                  </h4>
                  <p className="text-2xl font-bold text-gray-100 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{stat.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Subtle callout card */}
            <div className="glass-panel p-6 rounded-2xl border border-dashed border-white/10 flex flex-col justify-center text-center space-y-2">
              <p className="text-[10px] text-gold-400 font-bold uppercase tracking-widest">Core Values</p>
              <p className="text-sm font-semibold text-gray-300 italic leading-relaxed">
                "Writing optimized APIs and building clean pipelines to power intelligent machine learning models."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
