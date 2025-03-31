import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Features from '@/components/Features'
import Advantages from '@/components/Advantages'
import Tokenomics from '@/components/Tokenomics'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Advantages />
      <Tokenomics />
      <FAQ />
      <Footer />
    </main>
  )
} 