import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { resumeData } from "../data/resume";
import confetti from "canvas-confetti";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("SENDING");

    try {
      const response = await fetch(resumeData.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Trigger celebratory confetti
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#d4af37", "#fef08a", "#ffffff", "#8b5cf6"]
        });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0a0b10]">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
            Contact Me
          </h2>
          <div className="w-12 h-[2px] bg-gold-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-gray-200 mb-2">Contact Details</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              I am open to discussions about backend roles, machine learning systems, internship options, and new projects. Drop a line and I'll get back to you within 24 hours.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {/* Email Card */}
              <div className="premium-card p-5 rounded-2xl border border-white/5 flex items-center space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-gold-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Email Me</h4>
                  <a href={`mailto:${resumeData.profile.email}`} className="text-sm font-semibold text-gray-300 hover:text-gold-400 transition-colors cursor-pointer">
                    {resumeData.profile.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="premium-card p-5 rounded-2xl border border-white/5 flex items-center space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-gold-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Call Me</h4>
                  <a href={`tel:${resumeData.profile.phone}`} className="text-sm font-semibold text-gray-300 hover:text-gold-400 transition-colors cursor-pointer">
                    {resumeData.profile.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="premium-card p-5 rounded-2xl border border-white/5 flex items-center space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-gold-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Location</h4>
                  <p className="text-sm font-semibold text-gray-300">{resumeData.profile.location}</p>
                </div>
              </div>
            </div>

            {/* Social links block */}
            <div className="pt-4 flex items-center space-x-4">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Connect:</span>
              <a
                href={resumeData.profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 glass-panel border border-white/10 hover:border-gold-500/30 text-gray-400 hover:text-gold-400 rounded-lg transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={resumeData.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 glass-panel border border-white/10 hover:border-gold-500/30 text-gray-400 hover:text-gold-400 rounded-lg transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border text-sm text-gray-200 transition-all focus:outline-none focus:bg-white/[0.04] focus:shadow-[0_0_15px_rgba(212,163,89,0.05)] ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-gold-500/40"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border text-sm text-gray-200 transition-all focus:outline-none focus:bg-white/[0.04] focus:shadow-[0_0_15px_rgba(212,163,89,0.05)] ${
                        errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-gold-500/40"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border text-sm text-gray-200 transition-all focus:outline-none focus:bg-white/[0.04] focus:shadow-[0_0_15px_rgba(212,163,89,0.05)] ${
                      errors.subject ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-gold-500/40"
                    }`}
                    placeholder="Interview / Project Collaboration"
                  />
                  {errors.subject && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.subject}</p>}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.02] border text-sm text-gray-200 transition-all focus:outline-none resize-none focus:bg-white/[0.04] focus:shadow-[0_0_15px_rgba(212,163,89,0.05)] ${
                      errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-gold-500/40"
                    }`}
                    placeholder="Hi Jenil, I read your resume and I'd like to discuss..."
                  />
                  {errors.message && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "SENDING"}
                    className={`group flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dark font-bold text-sm tracking-wide shadow-md shadow-gold-500/5 hover:shadow-gold-500/10 transition-all duration-300 w-full md:w-auto cursor-pointer ${
                      status === "SENDING" ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    <span>{status === "SENDING" ? "Sending..." : "Send Message"}</span>
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                {/* Status Banners */}
                {status === "SUCCESS" && (
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/30 text-emerald-400 text-xs font-semibold flex items-center space-x-2">
                    <MessageSquare size={16} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
                {status === "ERROR" && (
                  <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/30 text-red-400 text-xs font-semibold flex items-center space-x-2">
                    <MessageSquare size={16} />
                    <span>Failed to send. Please check your network or try again later.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
