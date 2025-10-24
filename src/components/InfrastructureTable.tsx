"use client";

import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Cpu, Database, Network, Shield, Zap, Globe } from "lucide-react";

const infrastructure = [
  {
    icon: Cpu,
    layer: "Compute Layer",
    description: "HiPerGator GPU clusters (A100/H100) providing sovereign computational power for model training and inference.",
  },
  {
    icon: Database,
    layer: "Data Infrastructure",
    description: "Distributed storage systems with petabyte-scale capacity for training datasets and model checkpoints.",
  },
  {
    icon: Network,
    layer: "Neural Architecture",
    description: "Custom transformer implementations optimized for efficiency, built entirely on-campus by student researchers.",
  },
  {
    icon: Shield,
    layer: "Security & Compliance",
    description: "Enterprise-grade security protocols ensuring data sovereignty and compliance with academic research standards.",
  },
  {
    icon: Zap,
    layer: "Orchestration Engine",
    description: "Kubernetes-based deployment pipeline for seamless scaling from research prototypes to production systems.",
  },
  {
    icon: Globe,
    layer: "API Gateway",
    description: "RESTful and GraphQL interfaces enabling campus-wide access to AI capabilities with proper authentication.",
  },
];

export function InfrastructureTable() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1F] to-[#0B0B0F]" />
      
      {/* Accent Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#4DB5FF]/10 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Campus Infrastructure Vision
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A complete stack for sovereign AI development, from silicon to deployment.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden border border-[#4DB5FF]/20 bg-gradient-to-br from-[#1A1A1F]/80 to-[#0B0B0F]/80 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#4DB5FF]/20 hover:bg-transparent">
                <TableHead className="text-[#4DB5FF] text-lg">Core Layer</TableHead>
                <TableHead className="text-[#4DB5FF] text-lg">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {infrastructure.map((item, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-[#4DB5FF]/10 hover:bg-[#4DB5FF]/5 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TableCell className="py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4DB5FF]/20 to-[#8B5CF6]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-[#4DB5FF]" />
                      </div>
                      <span className="text-white text-lg">{item.layer}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 text-gray-400 leading-relaxed">
                    {item.description}
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>

          {/* Bottom Gradient Divider */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#4DB5FF] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
