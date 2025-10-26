"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink, Github, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GatorAIIcon } from "./ui/gator-ai-icon";

export function CTAFooter() {
  return (
    <footer className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#1A1A1F] to-[#0B0B0F]" />
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#4DB5FF]/20 via-[#8B5CF6]/10 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            From Gainesville to Global AI<br />
            Let's Build the Infrastructure of Intelligence.
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Join us in creating the next generation of sovereign AI systems, 
            powered by world-class research and student innovation.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4DB5FF] to-[#8B5CF6] hover:opacity-90 transition-opacity px-12 py-8 text-xl shadow-2xl shadow-[#4DB5FF]/30"
              asChild
            >
              <a href="https://pitch.gatorai.academy/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-3 w-6 h-6" />
                View Pitch Deck
              </a>
            </Button>
          </motion.div>

          {/* Logos */}
          <motion.div
            className="mt-20 flex items-center justify-center gap-12 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4DB5FF] to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#4DB5FF]/30">
                <GatorAIIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white text-lg">Gator AI</div>
                <div className="text-xs text-gray-500">University of Florida</div>
              </div>
            </div>

            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#4DB5FF]/30 to-transparent" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FA4616] to-[#FF8200] flex items-center justify-center shadow-lg shadow-[#FA4616]/30">
                <span className="text-white">UF</span>
              </div>
              <div>
                <div className="text-white text-lg">HiPerGator</div>
                <div className="text-xs text-gray-500">Supercomputing Cluster</div>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="mt-16 flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#4DB5FF]">
              <Github className="mr-2 w-4 h-4" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#4DB5FF]">
              <Mail className="mr-2 w-4 h-4" />
              Contact
            </Button>
          </motion.div>

          {/* Footer Text */}
          <div className="mt-12 pt-8 border-t border-[#4DB5FF]/10">
            <p className="text-sm text-gray-500">
              © 2025 Gator AI. Built by students, for the future of intelligence.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4DB5FF] to-transparent" />
    </footer>
  );
}
