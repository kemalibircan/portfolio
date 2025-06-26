'use client'
import { useEffect, useState } from 'react'
import { useApp } from '@/contexts/AppContext'

interface SplashScreenProps {
  onComplete: () => void
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { setLanguage,} = useApp()
  const [currentGreeting, setCurrentGreeting] = useState('')
  const [isVisible, setIsVisible] = useState(true)

  const greetings = [
    { text: 'Hello', lang: 'en' as const },
    { text: 'Merhaba', lang: 'tr' as const },
    { text: 'Hallo', lang: 'de' as const },
    { text: 'Bonjour', lang: 'fr' as const },
    { text: 'Hola', lang: 'es' as const },
  ]

  useEffect(() => {
    // Kullanıcının tarayıcı dilini tespit et
    const detectUserLanguage = () => {
      const browserLang = navigator.language.toLowerCase()
      
      if (browserLang.startsWith('tr')) {
        setLanguage('tr')
        return 'tr'
      } else if (browserLang.startsWith('de')) {
        return 'de'
      } else if (browserLang.startsWith('fr')) {
        return 'fr'
      } else if (browserLang.startsWith('es')) {
        return 'es'
      } else {
        setLanguage('en')
        return 'en'
      }
    }

    const userLang = detectUserLanguage()
    
    // Selamlama animasyonu
    let greetingIndex = 0
    const showGreetings = () => {
      if (greetingIndex < greetings.length) {
        setCurrentGreeting(greetings[greetingIndex].text)
        
        // Kullanıcının diline göre dil ayarla
        if (greetings[greetingIndex].lang === userLang) {
          setTimeout(() => {
            greetingIndex++
            if (greetingIndex < greetings.length) {
              setTimeout(showGreetings, 800)
            } else {
              // Son selamlamadan sonra biraz bekle ve kapat
              setTimeout(() => {
                setIsVisible(false)
                setTimeout(onComplete, 500)
              }, 1500)
            }
          }, 1200) // Kullanıcının dili için daha uzun süre göster
        } else {
          setTimeout(() => {
            greetingIndex++
            if (greetingIndex < greetings.length) {
              setTimeout(showGreetings, 200)
            } else {
              setTimeout(() => {
                setIsVisible(false)
                setTimeout(onComplete, 500)
              }, 1500)
            }
          }, 600)
        }
      }
    }

    showGreetings()
  }, [setLanguage, onComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-[100] bg-gray-900 flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center space-y-8">
        {/* Ana selamlama */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse">
            {currentGreeting}
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg blur opacity-20 animate-pulse"></div>
        </div>

        {/* İsim */}
        <div className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
          Ali Kemal Bircan
        </div>

        {/* Alt çizgi animasyonu */}
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>

        {/* Yükleme animasyonu */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Arka plan efektleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  )
}

export default SplashScreen