'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useApp } from '@/contexts/AppContext'
import SplashScreen from './components/SplashScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()
  const {  setIsLoading } = useApp()

  useEffect(() => {
    setMounted(true)
    // Dark tema ayarla
    setTheme('dark')
  }, [setTheme])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setIsLoading(false)
  }

  // Hydration için bekle
  if (!mounted) {
    return null
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <main className={`min-h-screen transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}