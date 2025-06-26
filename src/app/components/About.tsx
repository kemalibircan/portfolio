'use client'
import { useApp } from '@/contexts/AppContext'

const About = () => {
  const { t } = useApp()
  
  const skills = [
    'React Native', 'React.js', 'Next.js', 'Node.js', 'TypeScript',
    'Tailwind CSS', 'Redux', 'FastAPI', 'Django', 'PostgreSQL',
    'Python', 'Git', 'REST APIs', 'WebSocket', 'Elasticsearch'
  ]

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('aboutTitle')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('aboutText1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('aboutText2')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('aboutText3')}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('technicalSkills')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About