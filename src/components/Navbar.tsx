import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Focus on viewport center
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
    
    // Observe all sections
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#0a0b10]/80 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="text-xl font-bold tracking-wider text-gold-gradient transition-opacity hover:opacity-80"
        >
          JENIL<span className="text-[#f3f4f6]">PATEL</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                    activeSection === item.href.slice(1)
                      ? "text-gold-500"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-right from-gold-400 to-gold-600 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
            <a
              href={resumeData.profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={resumeData.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${resumeData.profile.email}`}
              className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-gold-400 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[73px] bg-[#0a0b10]/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8 px-6 text-center">
          <ul className="space-y-6">
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                className={`transition-all duration-500 transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-2xl font-medium tracking-wide ${
                    activeSection === item.href.slice(1)
                      ? "text-gold-500 font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`flex items-center space-x-6 pt-8 border-t border-white/10 w-full justify-center transition-all duration-700 delay-300 ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <a
              href={resumeData.profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-gold-400 p-2 glass-panel rounded-full transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={resumeData.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-gold-400 p-2 glass-panel rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${resumeData.profile.email}`}
              className="text-gray-300 hover:text-gold-400 p-2 glass-panel rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
