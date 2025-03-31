"use client"

import Image from 'next/image'
import Link from 'next/link'
import GradientBeams from './GradientBeams'

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://x.com/airived_coin',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Telegram',
    href: 'https://t.me/airived',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.107l-6.107 3.843-2.625-.816c-.57-.182-.582-.57.12-.842l10.273-3.96c.474-.176.888.106.576.864z"/>
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden border-t border-[rgba(177,0,255,0.2)] bg-gradient-to-b from-black via-black/95 to-black">
      {/* Gradient Beams */}
      <GradientBeams theme="purple" />

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="logo">
            <Image 
              src="/images/hd.png" 
              alt="Airived Logo" 
              width={180} 
              height={40} 
              style={{ width: '180px', height: 'auto' }}
            />
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Airived. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              The Future of DeFi & AI-NFTs
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 