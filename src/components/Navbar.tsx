import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { resumeData } from "../data/resume";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // focus on middle area
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "top-4 w-[92%] max-w-5xl px-4 md:px-6 py-2.5 bg-[#0a0b10]/75 backdrop-blur-md border border-white/10 rounded-full shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
            : "top-0 w-full px-6 py-6 bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="text-lg font-bold tracking-widest text-gold-gradient transition-opacity hover:opacity-80"
          >
            JENIL<span className="text-[#f3f4f6]">PATEL</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`relative text-xs font-semibold uppercase tracking-wider transition-all duration-300 px-4 py-2 rounded-full block ${
                      activeSection === item.href.slice(1)
                        ? "text-gold-400"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {activeSection === item.href.slice(1) && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 w-full h-full active-glide rounded-full z-[-1]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-3.5 border-l border-white/10 pl-5">
              <a
                href={resumeData.profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={resumeData.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={`mailto:${resumeData.profile.email}`}
                className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              {resumeData.profile.resumeUrl && (
                <a
                  href={resumeData.profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-dark bg-gold-500 hover:bg-gold-600 transition-all duration-300 cursor-pointer shadow-md shadow-gold-500/10"
                  aria-label="Resume"
                >
                  <FileText size={11} />
                  <span>Resume</span>
                </a>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-gold-400 transition-colors p-2 glass-panel rounded-full border border-white/10"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Floating Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-[80px] bg-[#0a0b10]/95 backdrop-blur-xl z-40 md:hidden border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          >
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <ul className="space-y-3.5 w-full">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`block w-full py-2 rounded-xl text-base font-semibold tracking-wide transition-all ${
                        activeSection === item.href.slice(1)
                          ? "text-gold-400 bg-gold-950/20 border border-gold-500/20"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                {resumeData.profile.resumeUrl && (
                  <li>
                    <a
                      href={resumeData.profile.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center space-x-1.5 w-full py-2.5 rounded-xl text-base font-bold text-dark bg-gold-500 hover:bg-gold-600 transition-colors cursor-pointer"
                    >
                      <FileText size={16} />
                      <span>View Resume</span>
                    </a>
                  </li>
                )}
              </ul>

              <div className="flex items-center space-x-5 pt-5 border-t border-white/5 w-full justify-center">
                <a
                  href={resumeData.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-gold-400 p-2.5 glass-panel rounded-full transition-colors border border-white/10"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={resumeData.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-gold-400 p-2.5 glass-panel rounded-full transition-colors border border-white/10"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href={`mailto:${resumeData.profile.email}`}
                  className="text-gray-300 hover:text-gold-400 p-2.5 glass-panel rounded-full transition-colors border border-white/10"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
