"use client"

import { motion } from "framer-motion"
import GradientBeams from "./GradientBeams"

const features = [
  {
    title: "AI-Driven DeFi Automation",
    description: "Airived's AI automates trading, yield optimization, and risk management, continuously adapting to market conditions for maximum returns with minimal user input.",
    icon: "🤖"
  },
  {
    title: "Seamless Cross-Chain Transactions",
    description: "With Account Abstraction (AA) and AI-powered liquidity routing, Airived enables frictionless DeFi interactions across multiple chains—no manual switching or bridging required.",
    icon: "⛓️"
  },
  {
    title: "AI-NFT Marketplace",
    description: "Users can train and customize AI models and trade them on the airived marketplace. This has AI-capable AI-NFTs.",
    icon: "🎨"
  },
  {
    title: "Smart Liquidity & Yield Optimization",
    description: "AI scans DeFi protocols in real time, allocating assets to the highest-yielding pools, optimizing lending rates, and identifying arbitrage opportunities for passive income.",
    icon: "📈"
  },
  {
    title: "Real-time On-chain News",
    description: "Airived uses natural language processing and blockchain analysis technology to track on-chain whale movements, market sentiment and capital flows, providing users with real-time artificial intelligence investment signals.",
    icon: "📰"
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      <GradientBeams theme="purple" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_80%)]" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-4">
            How Airived Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-purple-500/5 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-15px_rgba(168,85,247,0.3)]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 