// 2. Header component'ini güncelleyin
'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useApp } from '@/contexts/AppContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const {  setTheme, resolvedTheme } = useTheme()
  const { language, setLanguage, t } = useApp()

  // Hydration sorununu çözmek için
  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: '#about', label: t('about') },
    { href: '#experience', label: t('experience') },
    { href: '#projects', label: t('projects') },
    { href: '#contact', label: t('contact') }
  ]

  // Hydration tamamlanana kadar render etme
  if (!mounted) {
    return (
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Ali Kemal Bircan</h1>
            <div className="w-8 h-8"></div> {/* Placeholder */}
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Ali Kemal Bircan
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Theme Toggle - Güncellenmiş */}
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Globe size={20} />
                <span className="text-sm">{language.toUpperCase()}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setIsLangOpen(false)
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      language === 'en' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('tr')
                      setIsLangOpen(false)
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      language === 'tr' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Türkçe
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span className="text-sm">{resolvedTheme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
              
              <button
                onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                <Globe size={20} />
                <span className="text-sm">{language === 'en' ? 'TR' : 'EN'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header