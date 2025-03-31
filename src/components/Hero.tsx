import NFTShowcase from './NFTShowcase'
import AnimatedBeamMultipleOutputDemo from './animated-beam-multiple-outputs'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row w-full">
      {/* NFT Showcase - Hidden on mobile, full width on small screens, half width on large screens */}
      <div className="hidden md:block w-full lg:w-1/2 relative">
        <div className="absolute inset-0">
          <NFTShowcase />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center px-5 lg:px-15 gap-8 pt-24 lg:pt-0">
        {/* Animated Beam - Adjusted size for mobile */}
        <div className="w-full max-w-[500px] lg:max-w-none">
          <AnimatedBeamMultipleOutputDemo />
        </div>
        
        {/* Text Content - Centered on mobile, aligned on desktop */}
        <div className="w-full max-w-[90%] lg:max-w-[66%] text-center lg:text-left">
          {/* Logo Badge */}
          <div className="inline-block bg-gradient-to-r from-[#b100ff] to-[#00ff8b] text-white font-bold text-lg px-4 py-2 rounded-[20px] mb-4 shadow-[0_0_15px_rgba(177,0,255,0.5)] lowercase tracking-wider">
            airived
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-5 bg-gradient-to-r from-white to-[#00ff8b] bg-clip-text text-transparent">
            DeFAI in the Air, Fast and Fair
          </h1>
          
          {/* Description */}
          <p className="text-base lg:text-lg text-[#b3b3cc] mb-8 leading-relaxed">
            Airived is a next-generation DeFAI and AI-NFT marketplace, integrating AI-powered trading, 
            seamless cross-chain DeFi, and a revolutionary AI-NFT ecosystem. Users can automate DeFi 
            strategies with AI, trade AI-generated NFTs, and maximize yields effortlessly.
          </p>
          
          {/* Buttons - Full width on mobile, auto width on desktop */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <button className="w-full sm:w-auto px-7 py-3.5 rounded bg-gradient-to-r from-[#b100ff] to-[#00ff8b] text-white font-semibold hover:opacity-90 transition-opacity">
              Explore Marketplace
            </button>
            <a href="https://gitbook.airived.xyz/" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto px-7 py-3.5 rounded border border-[#b100ff] text-white font-semibold hover:bg-[rgba(177,0,255,0.1)] transition-all shadow-[0_0_10px_rgba(177,0,255,0.3)]">
              Gitbook
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 
