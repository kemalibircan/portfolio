'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, Language, TranslationKey } from '@/lib/translations'

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Kaydedilmiş dil tercihini kontrol et
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
      setLanguage(savedLanguage)
    } else {
      // Tarayıcı dilini tespit et
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('tr')) {
        setLanguage('tr')
      } else {
        setLanguage('en')
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  return (
    <AppContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      t,
      isLoading,
      setIsLoading
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}