'use client'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const Contact = () => {
  const { t } = useApp()

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('contactTitle')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('contactText')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('contactInfo')}
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:kemal.alibircan@gmail.com"
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={24} />
                  <span>kemal.alibircan@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+905346124642"
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone size={24} />
                  <span>+90 534 612 4642</span>
                </a>
                
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <MapPin size={24} />
                  <span>İzmir, Türkiye</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('socialLinks')}
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/in/alibircan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                  <span>{t('linkedinProfile')}</span>
                </a>
                
                <a 
                  href="https://github.com/kemalibircan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                >
                  <Github size={24} />
                  <span>{t('githubProfile')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact