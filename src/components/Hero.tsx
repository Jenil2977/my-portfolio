import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { resumeData } from "../data/resume";

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  const floatingBadges = [
    { name: "Python", x: "10%", top: "25%", delay: 0 },
    { name: "FastAPI", x: "85%", top: "20%", delay: 1.5 },
    { name: "React", x: "80%", top: "68%", delay: 0.8 },
    { name: "Django", x: "12%", top: "72%", delay: 2.2 },
    { name: "Gemini RAG", x: "48%", top: "18%", delay: 1.2 }
  ];

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-mesh"
    >
      {/* Decorative Blur Mesh */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none animate-float" style={{ animationDelay: "-4s" }} />

      {/* Floating Stack Badges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingBadges.map((badge, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.45, 0.45, 0],
              y: [0, -18, 0],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: badge.delay
            }}
            style={{ left: badge.x, top: badge.top }}
            className="absolute hidden md:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full glass-panel border border-white/5 shadow-lg text-[9px] font-bold text-gold-400 uppercase tracking-widest bg-dark-card/30"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span>{badge.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center space-y-5 md:space-y-7"
        >
          {/* Subheading Greeting */}
          <div className="overflow-hidden">
            <motion.p
              variants={itemVariants}
              className="text-xs md:text-sm font-bold uppercase tracking-widest text-gold-500"
            >
              Hello, I am
            </motion.p>
          </div>

          {/* Main Title Name with reveal mask */}
          <div className="overflow-hidden py-1">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-8xl font-extrabold tracking-tight text-white leading-none"
            >
              <span className="text-gold-gradient block">
                {resumeData.profile.name}
              </span>
            </motion.h1>
          </div>

          {/* Large Subtitle role */}
          <div className="overflow-hidden">
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-3xl font-semibold max-w-2xl text-gray-200 tracking-wide font-sans title-gradient"
            >
              {resumeData.profile.title}
            </motion.h2>
          </div>

          {/* Brief Bio Text */}
          <div className="overflow-hidden">
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed font-normal"
            >
              {resumeData.profile.subTitle}. Specializing in building scalable Python backend systems, NLP resume parsing pipelines, and local FAISS vector search chatbots.
            </motion.p>
          </div>

          {/* Actions CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-xl"
          >
            <button
              onClick={() => handleScrollTo("#projects")}
              className="group flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dark font-bold tracking-wide shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <span>View Case Studies</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            {resumeData.profile.resumeUrl && (
              <a
                href={resumeData.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full glass-panel hover:bg-white/5 border border-white/10 hover:border-white/20 text-[#f3f4f6] font-semibold tracking-wide transition-all duration-300 w-full sm:w-auto cursor-pointer"
              >
                <FileText size={16} className="text-gold-400 group-hover:scale-110 transition-transform" />
                <span>Resume</span>
              </a>
            )}
            <button
              onClick={() => handleScrollTo("#contact")}
              className="group flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full glass-panel hover:bg-white/5 border border-white/10 hover:border-white/20 text-[#f3f4f6] font-semibold tracking-wide transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <span>Get In Touch</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-500 cursor-pointer pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll Down</span>
        <div className="w-[18px] h-[32px] rounded-full border border-gray-600 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[4px] h-[6px] rounded-full bg-gold-400"
          />
        </div>
      </div>
    </section>
  );
};
