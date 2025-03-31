'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Theme = 'purple' | 'green'

interface SocialLink {
  name: string
  href: string
  theme: Theme
  icon: JSX.Element
}

const socialLinks: SocialLink[] = [
  {
    name: 'Twitter',
    href: 'https://x.com/airived_coin',
    theme: 'purple',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Telegram',
    href: 'https://t.me/airived',
    theme: 'green',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.107l-6.107 3.843-2.625-.816c-.57-.182-.582-.57.12-.842l10.273-3.96c.474-.176.888.106.576.864z"/>
      </svg>
    )
  }
]

const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Advantages', href: '#advantages' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'FAQ', href: '#faq' },
]

const getButtonStyles = (theme: Theme) => {
  if (theme === 'purple') {
    return {
      border: 'border-[#b100ff]',
      text: 'text-[#b100ff]',
      hover: 'hover:bg-[rgba(177,0,255,0.1)]',
      shadow: 'shadow-[0_0_10px_rgba(177,0,255,0.3)]',
      hoverShadow: 'hover:shadow-[0_0_20px_rgba(177,0,255,0.5)]'
    }
  }
  return {
    border: 'border-[#00ff8b]',
    text: 'text-[#00ff8b]',
    hover: 'hover:bg-[rgba(0,255,139,0.1)]',
    shadow: 'shadow-[0_0_10px_rgba(0,255,139,0.3)]',
    hoverShadow: 'hover:shadow-[0_0_20px_rgba(0,255,139,0.5)]'
  }
}

export default function Header() {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClick = (href: string) => {
    if (typeof window === 'undefined') return
    
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  // Don't render anything until mounted to avoid hydration mismatch
  if (!isMounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 w-screen py-6 z-[1000] bg-[rgba(5,5,8,0.8)] backdrop-blur border-b border-[rgba(177,0,255,0.2)]">
      <div className="w-full mx-auto px-5 flex items-center justify-between">
        <div className="logo">
          <Image 
            src="/images/hd.png" 
            alt="Airived Logo" 
            width={180} 
            height={40} 
            style={{ width: '180px', height: 'auto' }}
            priority
          />
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleClick(item.href)}
                  className={`relative text-[#b3b3cc] hover:text-white transition-colors text-[15px] ${
                    item.name === 'Home' ? 'text-white' : ''
                  }`}
                  onMouseEnter={() => setIsHovered(item.name)}
                  onMouseLeave={() => setIsHovered(null)}
                  style={{
                    textShadow: isHovered === item.name ? '0 0 10px #b100ff, 0 0 20px #b100ff' : 'none'
                  }}
                >
                  {item.name}
                  <span className={`absolute bottom-[-5px] left-0 h-0.5 bg-gradient-to-r from-[#b100ff] to-[#00ff8b] transition-all duration-300 ${
                    isHovered === item.name || item.name === 'Home' ? 'w-full' : 'w-0'
                  }`} />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="hidden lg:flex gap-3">
          {socialLinks.map((link: SocialLink) => {
            const styles = getButtonStyles(link.theme)
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-5 py-2.5 ${styles.border} ${styles.text} rounded-md bg-transparent ${styles.hover} transition-all duration-300 font-semibold ${styles.shadow} ${styles.hoverShadow}`}
              >
                {link.icon}
                <span className="hidden sm:inline text-[15px]">{link.name}</span>
              </Link>
            )
          })}
        </div>

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-[72px] left-0 right-0 bg-[rgba(5,5,8,0.95)] backdrop-blur border-b border-[rgba(177,0,255,0.2)]"
            >
              <nav className="container mx-auto py-6 px-5">
                <ul className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleClick(item.href)}
                        className="w-full text-left text-[#b3b3cc] hover:text-white transition-colors py-2"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-6">
                  {socialLinks.map((link: SocialLink) => {
                    const styles = getButtonStyles(link.theme)
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 ${styles.border} ${styles.text} rounded-md bg-transparent ${styles.hover} transition-all duration-300 ${styles.shadow}`}
                      >
                        {link.icon}
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 