"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { GatorAIIcon } from "./ui/gator-ai-icon";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#1A1A1F] to-[#0B0B0F]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(77, 181, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(77, 181, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Florida Map Glow Effect */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#4DB5FF]/20 via-[#8B5CF6]/10 to-transparent rounded-full blur-3xl" />
        
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#4DB5FF] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4DB5FF]/10 to-[#8B5CF6]/10 border border-[#4DB5FF]/20 mb-8">
            <GatorAIIcon className="w-4 h-4 text-[#4DB5FF]" />
            <span className="text-sm text-[#4DB5FF]">Intelligence Built on Campus</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-[#4DB5FF] to-[#8B5CF6] bg-clip-text text-transparent tracking-tight">
            The Future of AI Engineering Built at UF.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Harnessing HiPerGator's supercomputing power to train sovereign AI agents, 
            automate research, and build the next generation of intelligence right here on campus.
          </p>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4DB5FF] to-[#8B5CF6] hover:opacity-90 transition-opacity px-8 py-6 text-lg group"
              asChild
            >
              <a href="#projects" className="flex items-center group/btn">
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
