"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import GradientBeams from "./GradientBeams"

const faqs = [
  {
    question: "What is airived?",
    answer: "A DeFAI decentralized finance aggregator that automates trading, optimizes earnings, and simplifies cross-chain transactions."
  },
  {
    question: "How does airived improve DeFi trading?",
    answer: "AI automates asset allocation, detects smart contract risks, and finds the best yield opportunities."
  },
  {
    question: "What makes airived's cross-chain feature unique?",
    answer: "Seamless, bridge-free transactions across multiple chains using Account Abstraction (AA) and native liquidity routing."
  },
  {
    question: "What is an AI-NFT?",
    answer: "An AI-NFT is a tradable AI model that can perform functions like trading bots, generative art, or AI assistants. Users can train, mint, and sell their AI models on the Airived marketplace."
  },
  {
    question: "What are the benefits of holding $AIR?",
    answer: "$AIR enables staking rewards, fee reductions, governance participation, and access to premium AI-powered tools and NFT minting."
  },
  {
    question: "Can I stake $AIR?",
    answer: "Yes, staking earns rewards and boosts farming yields."
  },
  {
    question: "Does airived support non-EVM chains?",
    answer: "Yes, Ethereum, BSC, Polygon, Solana, Cosmos, and more."
  },
  {
    question: "How do I get started?",
    answer: "Connect your wallet and let airived's AI automate your DeFi experience."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
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
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF94] to-[#0047FF] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-2xl bg-gradient-to-b from-[#00FF94]/5 to-black/20 backdrop-blur-sm border border-[#00FF94]/10 hover:border-[#00FF94]/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#00FF94] transition-colors">
                    {faq.question}
                  </h3>
                  <div 
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M6 9L12 15L18 9" 
                        stroke="#00FF94" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 