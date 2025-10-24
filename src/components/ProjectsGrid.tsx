"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { ArrowRight, Code, Brain, TrendingUp } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    icon: Code,
    title: "RexAgent",
    tagline: "The AI That Codes While You Sleep",
    description: "Autonomous coding agent that writes, tests, and deploys production-ready code using advanced reasoning chains and intelligent automation.",
    gradient: "from-[#4DB5FF] to-[#8B5CF6]",
    size: "medium",
    url: "https://www.rexagent.app/",
  },
  {
    icon: Brain,
    title: "Nalandaï",
    tagline: "Sovereign Code Generation Engine",
    description: "Campus-trained LLM specialized in software engineering, built on HiPerGator infrastructure with advanced reasoning capabilities.",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
    size: "medium",
    url: "https://www.nalandai.com/",
  },
  {
    icon: TrendingUp,
    title: "BlueBeetle.live",
    tagline: "Agentic Intelligence for the Markets",
    description: "Real-time market analysis and trading strategies powered by multi-agent AI systems with intelligent decision-making capabilities.",
    gradient: "from-[#4DB5FF] to-[#06B6D4]",
    size: "medium",
    url: "https://bluebeetle.app/",
  },
];

export function ProjectsGrid() {
  return (
    <section className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0B0F]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Projects Building the Future
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From autonomous agents to sovereign LLMs, our projects push the boundaries of what's possible with AI.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <Card className="group relative overflow-hidden bg-gradient-to-br from-[#1A1A1F] to-[#0B0B0F] border-[#4DB5FF]/20 hover:border-[#4DB5FF]/40 transition-all duration-500 p-8 h-full hover:scale-[1.02] cursor-pointer">
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-3xl text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-[#4DB5FF] mb-4 italic">
                      {project.tagline}
                    </p>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center text-[#4DB5FF] hover:text-white group/btn">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
