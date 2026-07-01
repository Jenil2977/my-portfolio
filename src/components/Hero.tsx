import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { resumeData } from "../data/resume";

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

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

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center space-y-6 md:space-y-8"
        >


          {/* Subheading Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg font-medium text-gray-400 tracking-wide"
          >
            Hello, I am
          </motion.p>

          {/* Main Title Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-extrabold tracking-tight"
          >
            <span className="text-gold-gradient block mb-2 md:inline md:mr-4">
              {resumeData.profile.name}
            </span>
          </motion.h1>

          {/* Large Subtitle role */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-3xl font-medium max-w-2xl text-gray-300 tracking-wide font-sans"
          >
            {resumeData.profile.title}
          </motion.h2>

          {/* Brief Bio Text */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed"
          >
            {resumeData.profile.subTitle}. Specialized in Python, Django REST API development, NLP resume processing, and vector search RAG chatbots.
          </motion.p>

          {/* Actions CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full max-w-md"
          >
            <button
              onClick={() => handleScrollTo("#projects")}
              className="group flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dark font-semibold tracking-wide shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 transition-all duration-300 w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="group flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full glass-panel hover:bg-white/5 border border-white/10 hover:border-white/20 text-[#f3f4f6] font-semibold tracking-wide transition-all duration-300 w-full sm:w-auto"
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
