"use client"

import type React from "react"
import { forwardRef, useRef } from "react"
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "./animated-beam"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-16 items-center justify-center rounded-full border border-purple-500/30 bg-black/20 backdrop-blur-sm p-4 shadow-[0_0_30px_-6px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:shadow-[0_0_30px_-3px_rgba(168,85,247,0.6)] text-purple-300/80 hover:text-purple-300",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn("relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10", className)}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-20">
            <Image 
              src="/images/icon.png" 
              alt="Airived Icon" 
              width={48} 
              height={48}
              className="object-contain"
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.ethereum />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.bitcoin />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.polygon />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.binance />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.solana />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />
    </div>
  )
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#AF91CF"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  ethereum: () => (
    <svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#AF91CF" d="M16 0L6 16l10 5.9 10-5.9L16 0zm0 32l-10-14 10 5.9 10-5.9L16 32z"/>
    </svg>
  ),
  bitcoin: () => (
    <svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#AF91CF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84l-1.728-.43l-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.745-.17-1.104-.26l.002-.009l-2.384-.595l-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045l-1.13 4.532c-.086.212-.303.531-.793.41c.018.025-1.256-.313-1.256-.313l-.858 1.978l2.25.561c.418.105.828.215 1.231.318l-.715 2.872l1.727.43l.708-2.84c.472.127.93.245 1.378.357l-.706 2.828l1.728.43l.715-2.866c2.948.558 5.164.333 6.097-2.333c.752-2.146-.037-3.385-1.588-4.192c1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/>
    </svg>
  ),
  polygon: () => (
    <svg width="40" height="40" viewBox="0 0 178 161" xmlns="http://www.w3.org/2000/svg">
      <path fill="#AF91CF" d="M66.8,54.7l-16.7-9.7L0,74.1v58l50.1,29l50.1-29V41.9L128,25.8l27.8,16.1v32.2L128,90.2l-16.7-9.7v25.8
        l16.7,9.7l50.1-29V29L128,0L77.9,29v90.2l-27.8,16.1l-27.8-16.1V86.9l27.8-16.1l16.7,9.7V54.7z"/>
    </svg>
  ),
  binance: () => (
    <svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#AF91CF" d="M15.986 1.019l9.189 9.159-3.396 3.393-5.793-5.793-5.793 5.823-3.396-3.393 9.189-9.189zM4.399 12.605l3.365 3.395-3.363 3.365-3.396-3.365zM15.986 12.607l3.394 3.363-3.395 3.395-3.395-3.365 3.395-3.393zM27.572 12.605l3.423 3.395-3.393 3.395-3.395-3.395zM21.778 18.399l3.396 3.393-9.189 9.189-9.189-9.187 3.396-3.395 5.793 5.823 5.793-5.823z"/>
    </svg>
  ),
  solana: () => (
    <svg width="40" height="40" viewBox="0 0 397.7 311.7" xmlns="http://www.w3.org/2000/svg">
      <path fill="#AF91CF" d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5 c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z M64.6,3.8C67,1.4,70.3,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7 c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z M331.9,120.8c-2.4-2.4-5.7-3.8-9.2-3.8H5.3c-5.8,0-8.7,7-4.6,11.1 l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L331.9,120.8z"/>
    </svg>
  ),
}

