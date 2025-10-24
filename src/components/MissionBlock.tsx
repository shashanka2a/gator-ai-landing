"use client";

import { motion } from "framer-motion";
import { Server, Users, Zap } from "lucide-react";

const missions = [
  {
    icon: Server,
    title: "Sovereign Compute",
    description: "Full control over our AI infrastructure, built on HiPerGator's world-class GPUs",
  },
  {
    icon: Users,
    title: "Student-Led Innovation",
    description: "Empowering the next generation of AI engineers with hands-on experience",
  },
  {
    icon: Zap,
    title: "Research-Ready Infrastructure",
    description: "Production-grade systems powering academic & commercial breakthroughs",
  },
];

export function MissionBlock() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] to-[#1A1A1F]" />
      
      {/* Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#8B5CF6]/10 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Quote */}
        <motion.blockquote
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl italic text-white mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            "Why rely on Silicon Valley when we can build the valley of intelligence right here in Gainesville?"
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4DB5FF] to-transparent mx-auto mt-8" />
        </motion.blockquote>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-b from-[#1A1A1F]/50 to-[#0B0B0F]/50 border border-[#4DB5FF]/10 hover:border-[#4DB5FF]/30 transition-all duration-300 group-hover:scale-105">
                {/* Icon Glow */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-[#4DB5FF] to-[#8B5CF6] rounded-xl flex items-center justify-center shadow-lg shadow-[#4DB5FF]/20 group-hover:shadow-[#4DB5FF]/40 transition-shadow">
                  <mission.icon className="w-6 h-6 text-white" />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl text-white mb-3">{mission.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{mission.description}</p>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4DB5FF]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
