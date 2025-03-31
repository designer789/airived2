'use client'

import Image from 'next/image'

const nftData = [
  {
    image: "/images/nft1.png",
    name: "Cyber Zen",
    tag: "airived"
  },
  {
    image: "/images/nft2.png",
    name: "Degraded Creatures",
    tag: "airived"
  },
  {
    image: "/images/nft3.png",
    name: "AI Dream Archives",
    tag: "airived"
  },
  {
    image: "/images/nft4.png",
    name: "Pixel Mafia",
    tag: "airived"
  },
  {
    image: "/images/nft5.png",
    name: "Fragments of Time",
    tag: "airived"
  },
  {
    image: "/images/nft6.png",
    name: "Void Singers",
    tag: "airived"
  },
  {
    image: "/images/nft7.png",
    name: "Mechanical Oracles",
    tag: "airived"
  },
  {
    image: "/images/nft8.png",
    name: "Data Phantoms",
    tag: "airived"
  },
  {
    image: "/images/nft9.png",
    name: "Crypto Cookbook",
    tag: "airived"
  },
  {
    image: "/images/nft10.png",
    name: "Quantum Flora",
    tag: "airived"
  },
  {
    image: "/images/nft11.png",
    name: "Lost Emoji",
    tag: "airived"
  },
  {
    image: "/images/nft12.png",
    name: "Parallel Selve",
    tag: "airived"
  },
  {
    image: "/images/nft13.png",
    name: "Noise Sculptures",
    tag: "airived"
  },
  {
    image: "/images/nft14.png",
    name: "Neon Nostalgia",
    tag: "airived"
  },
  {
    image: "/images/nft15.png",
    name: "404 Galaxy",
    tag: "airived"
  },
]

export default function NFTShowcase() {
  // Create three different sets of 5 NFTs for each column
  const columnSets = [
    nftData.slice(0, 5),    // First column: NFTs 1-5
    nftData.slice(5, 10),   // Second column: NFTs 6-10
    nftData.slice(10, 15),  // Third column: NFTs 11-15
  ]

  return (
    <div className="relative w-full h-full flex justify-evenly p-0 bg-gradient-to-br from-[#b100ff] via-[#00ff8b] to-[#b100ff] overflow-hidden">
      {[false, true, false].map((isReverse, columnIndex) => (
        <div key={columnIndex} className="w-[28%] h-full overflow-hidden relative">
          <div className={`absolute top-0 left-0 w-full h-[200%] flex flex-col`}>
            <div className={`flex flex-col gap-10 w-full animate-${isReverse ? 'scrollUp' : 'scrollDown'}`}>
              {[...Array(10)].map((_, i) => {
                const nft = columnSets[columnIndex][i % 5]; // Use the specific set for this column
                return (
                  <div key={i} className="w-full aspect-[1.5/2] bg-[#040310] rounded-lg relative overflow-hidden group">
                    <Image
                      src={nft.image}
                      alt={nft.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      quality={75}
                      onError={(e: any) => {
                        e.target.src = '/images/placeholder.png' // 添加一个默认的占位图
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(177,0,255,0.1)] to-[rgba(0,255,139,0.1)] group-hover:opacity-0 transition-opacity duration-300" />
                    
                    {/* Name Banner */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent backdrop-blur-sm p-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-medium text-sm">{nft.name}</h3>
                        <div className="bg-gradient-to-r from-[#b100ff] to-[#00ff8b] text-[10px] px-2 py-0.5 rounded-full text-white">
                          #{nft.tag}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 