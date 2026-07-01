import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CustomCursor } from "../components/CustomCursor";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0b10] text-[#f3f4f6] relative">
      {/* Custom Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />
      
      {/* Custom luxury cursor */}
      <CustomCursor />

      {/* Static header decoration grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      {/* Main content sections wrapper */}
      <main className="flex-grow z-10">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
