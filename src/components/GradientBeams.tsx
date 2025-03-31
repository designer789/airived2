"use client"

import { motion } from "framer-motion"

interface GradientBeamsProps {
  theme?: 'purple' | 'blue-green'
}

export default function GradientBeams({ theme = 'purple' }: GradientBeamsProps) {
  const colors = {
    'purple': ['from-[#AF91CF]', 'to-[#6C00F6]'],
    'blue-green': ['from-[#00FF94]', 'to-[#0047FF]']
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`w-[500px] h-[500px] bg-gradient-to-r ${colors[theme][0]} ${colors[theme][1]} opacity-20 blur-[100px]`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
} 