"use client"

import { motion } from "framer-motion"
import GradientBeams from "./GradientBeams"

const advantages = [
  {
    title: "AI-Powered DeFi & AI-NFTs in One",
    description: "Airived merges automated DeFi strategies with AI-generated NFT trading, creating a new financial ecosystem where AI works for you.",
    gradient: "from-[#00FF94] to-[#0047FF]"
  },
  {
    title: "Non-Custodial, Secure Wallet",
    description: "With MPC (Multi-Party Computation) technology, users retain full control of their assets without private key risks, eliminating reliance on centralized custody.",
    gradient: "from-[#00FF94] to-[#0047FF]"
  },
  {
    title: "Monetize AI Creations",
    description: "Users can train, mint, and sell AI-powered NFTs with real-world applications, allowing developers and traders to generate revenue from AI models.",
    gradient: "from-[#00FF94] to-[#0047FF]"
  },
  {
    title: "Gas & Transaction Cost Optimization",
    description: "AI batch processes and optimizes transactions, reducing gas fees while ensuring fast and cost-efficient execution.",
    gradient: "from-[#00FF94] to-[#0047FF]"
  }
]

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      <GradientBeams theme="blue-green" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_80%)]" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Key Advantages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF94] to-[#0047FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(to right, ${advantage.gradient.split(' ')[1]}, ${advantage.gradient.split(' ')[3]})`
                }}
              />
              <div className="relative p-8 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
                <div 
                  className={`text-xl font-semibold mb-4 bg-gradient-to-r ${advantage.gradient} bg-clip-text text-transparent`}
                >
                  {advantage.title}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 