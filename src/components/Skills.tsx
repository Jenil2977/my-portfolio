import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Brain, Code, Cpu, Database, Wrench } from "lucide-react";
import { resumeData } from "../data/resume";

const iconMap: { [key: string]: React.ReactNode } = {
  "Languages": <Code className="text-blue-400" size={18} />,
  "AI and ML": <Brain className="text-violet-400" size={18} />,
  "Frameworks & Tools": <Cpu className="text-cyan-400" size={18} />,
  "Databases": <Database className="text-emerald-400" size={18} />,
  "Developer Tools": <Wrench className="text-amber-400" size={18} />
};

const hoverStyleMap: { [key: string]: string } = {
  "Languages": "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-950/15",
  "AI and ML": "hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-950/15",
  "Frameworks & Tools": "hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-950/15",
  "Databases": "hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-950/15",
  "Developer Tools": "hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-950/15"
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...resumeData.skills.map((s) => s.category)];

  const filteredSkillsData = resumeData.skills
    .map((cat) => {
      const matchedSkills = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: matchedSkills
      };
    })
    .filter((cat) => {
      if (cat.skills.length === 0) return false;
      if (selectedCategory !== "All" && cat.category !== selectedCategory) return false;
      return true;
    });

  return (
    <section id="skills" className="relative py-24 bg-[#0a0b10]">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-[2px] bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Filter controls container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 glass-panel p-4 rounded-2xl border border-white/5">
          {/* Category selection pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gold-500 text-dark font-bold shadow-md shadow-gold-500/10"
                    : "bg-white/5 text-gray-400 hover:text-gray-200 border border-white/5 hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search input field */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, FAISS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-dark-card border border-white/5 hover:border-white/10 focus:border-gold-500/50 focus:outline-none text-sm text-gray-200 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkillsData.map((categoryGroup) => (
              <motion.div
                layout
                key={categoryGroup.category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="premium-card p-6 rounded-2xl border border-white/5 relative group"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      {iconMap[categoryGroup.category] || <Code size={18} />}
                    </div>
                    <h3 className="font-bold text-gray-200 text-base">
                      {categoryGroup.category}
                    </h3>
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold px-2 py-0.5 rounded bg-white/5">
                    {categoryGroup.skills.length} Items
                  </span>
                </div>

                {/* Skills tags grid */}
                <div className="flex flex-wrap gap-2.5">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs font-semibold text-gray-300 bg-dark-card/50 px-3.5 py-2 rounded-xl border border-white/5 transition-all duration-300 cursor-default ${
                        hoverStyleMap[categoryGroup.category] || "hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-950/15"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredSkillsData.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No matching skills found for "{searchQuery}".
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
