"use client"

import { motion } from "framer-motion"
import GradientBeams from "./GradientBeams"

const tokenInfo = {
  name: "$AIR",
  totalSupply: "1,000,000,000",
  utilities: [
    {
      title: "AI-Driven DeFi Access",
      description: "Unlock automated yield optimization, risk analysis, and market intelligence."
    },
    {
      title: "AI-NFT Minting & Trading",
      description: "Use $AIR for minting AI-generated NFTs and accessing the marketplace"
    },
    {
      title: "Cross-Chain Fee Discounts",
      description: "Lower gas and transaction fees for seamless multi-chain interactions."
    },
    {
      title: "Governance & Voting",
      description: "Shape airived's future by voting on upgrades and AI model improvements."
    },
    {
      title: "Staking & Yield Boosting",
      description: "Stake $AIR to earn rewards and enhance farming strategies."
    },
    {
      title: "Exclusive Market Insights",
      description: "Access real-time whale tracking, sentiment analysis, and DeFi trends."
    }
  ],
  allocation: [
    { name: "Liquidity & Public", percentage: 70, color: "#AF91CF" },
    { name: "Staking & Yield Rewards", percentage: 10, color: "#6C00F6" },
    { name: "Community & Airdrops", percentage: 5, color: "#9B51E0" },
    { name: "Marketing & Partnerships", percentage: 10, color: "#8B5CF6" },
    { name: "Team & Advisors", percentage: 5, color: "#7C3AED" }
  ]
}

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-24 overflow-hidden">
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Tokenomics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#AF91CF] to-[#6C00F6] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Token Info & Utilities */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-b from-purple-500/5 to-black/20 backdrop-blur-sm rounded-2xl border border-purple-500/10 p-8"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#AF91CF] to-[#6C00F6] bg-clip-text text-transparent mb-4">
                {tokenInfo.name}
              </h3>
              <p className="text-white text-lg mb-2">
                Total Supply: <span className="text-[#AF91CF]">{tokenInfo.totalSupply}</span>
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-b from-purple-500/5 to-black/20 backdrop-blur-sm rounded-2xl border border-purple-500/10 p-8 flex-1"
            >
              <h3 className="text-xl font-bold text-white mb-6">Utility</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tokenInfo.utilities.map((utility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-6 before:absolute before:left-0 before:top-[10px] before:w-2 before:h-2 before:bg-[#AF91CF] before:rounded-full"
                  >
                    <h4 className="text-[#AF91CF] font-semibold text-sm mb-1">{utility.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{utility.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Token Allocation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-b from-purple-500/5 to-black/20 backdrop-blur-sm rounded-2xl border border-purple-500/10 p-8 h-full flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-8">Token Allocation</h3>
            <div className="flex flex-col items-center flex-1">
              <div className="w-[240px] aspect-square mb-8">
                <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full">
                  {tokenInfo.allocation.reduce((acc: { elements: JSX.Element[], offset: number }, item, i) => {
                    const CIRCUMFERENCE = 251.2;
                    const offset = acc.offset || 0;
                    const percentage = item.percentage;
                    const strokeDasharray = (percentage / 100) * CIRCUMFERENCE;
                    const strokeDashoffset = -offset / 100 * CIRCUMFERENCE;
                    
                    acc.elements.push(
                      <circle
                        key={i}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="20"
                        strokeDasharray={`${strokeDasharray} ${CIRCUMFERENCE}`}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-1000"
                        style={{
                          transformOrigin: '50% 50%',
                        }}
                      />
                    );
                    acc.offset = offset + percentage;
                    return acc;
                  }, { elements: [], offset: 0 }).elements}
                </svg>
              </div>
              <div className="w-full">
                {tokenInfo.allocation.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 hover:bg-purple-500/5 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-white">{item.name}</span>
                    <span className="text-gray-400 ml-auto">{item.percentage}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 