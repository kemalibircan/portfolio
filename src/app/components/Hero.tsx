'use client'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const Hero = () => {
  const { t } = useApp()

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="tel:+905346124642" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Phone size={20} />
              +90 534 612 4642
            </a>
            <a href="mailto:kemal.alibircan@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail size={20} />
              kemal.alibircan@gmail.com
            </a>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin size={20} />
              İzmir, Türkiye
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a 
              href="https://linkedin.com/in/alibircan" 
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <Linkedin size={20} />
              {t('linkedin')}
            </a>
            <a 
              href="https://github.com/kemalibircan" 
              target="_blank"
              className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <Github size={20} />
              {t('github')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero