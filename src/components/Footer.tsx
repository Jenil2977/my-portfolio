import React from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { resumeData } from "../data/resume";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#07080c] border-t border-white/5 py-12 md:py-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Logo and brief info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold tracking-wider text-gold-gradient">
              JENIL<span className="text-[#f3f4f6]">PATEL</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              AI & Full-Stack Developer creating optimized, high-fidelity digital solutions.
            </p>
          </div>

          {/* Social connections */}
          <div className="flex items-center space-x-4">
            <a
              href={resumeData.profile.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full glass-panel text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={resumeData.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full glass-panel text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${resumeData.profile.email}`}
              className="w-10 h-10 flex items-center justify-center rounded-full glass-panel text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${resumeData.profile.phone}`}
              className="w-10 h-10 flex items-center justify-center rounded-full glass-panel text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 flex items-center justify-center rounded-full glass-panel text-gray-400 hover:text-gold-400 border border-white/5 hover:border-gold-500/30 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Jenil Patel. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Built with</span>
            <span className="text-gold-500">React & TS</span>
            <span>• Optimized for GitHub Pages</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
