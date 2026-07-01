import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ShieldAlert, Sparkles, Trophy } from "lucide-react";
import { resumeData } from "../data/resume";

export const Certifications: React.FC = () => {
  return (
    <section id="credentials" className="relative py-24 bg-[#0a0b10]">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-1/10 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 left-1/10 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none animate-float" style={{ animationDelay: "-3s" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            Qualifications
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
            Credentials & Achievements
          </h2>
          <div className="w-12 h-[2px] bg-gold-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="text-gold-500" size={24} />
              <h3 className="text-xl font-bold text-gray-200">
                Professional Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {resumeData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-panel p-5 rounded-2xl border border-white/5 flex items-start space-x-4 glass-panel-hover"
                >
                  <div className="p-3 bg-gold-950/20 border border-gold-800/30 rounded-xl shrink-0">
                    <Award className="text-gold-500" size={20} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-bold text-gray-200 text-sm md:text-base">
                        {cert.title}
                      </h4>
                      <span className="text-[10px] font-bold text-gold-400 bg-gold-950/40 border border-gold-800/30 px-2 py-0.5 rounded shrink-0 self-start sm:self-center">
                        {cert.issuer} • {cert.year}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      {cert.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="text-gold-500" size={24} />
              <h3 className="text-xl font-bold text-gray-200">
                Key Accomplishments
              </h3>
            </div>

            {/* Achievements List Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 space-y-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="text-gold-400" size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Highlights Track
                  </span>
                </div>
                <span className="text-[10px] text-gold-400 font-bold bg-gold-950/30 border border-gold-800/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Verified
                </span>
              </div>

              <div className="space-y-4">
                {resumeData.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="text-gold-500 mr-3 mt-0.5 shrink-0" size={16} />
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {ach}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quote/Recruiter note */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-start space-x-3">
              <ShieldAlert className="text-gold-400 mt-0.5 shrink-0" size={18} />
              <p className="text-xs text-gray-500 leading-relaxed">
                Certifications and records are verified via official portals (Anthropic credentials, Simplilearn ID, and GitHub commits).
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
