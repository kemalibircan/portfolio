'use client'
import { useApp } from '@/contexts/AppContext'

const Experience = () => {
  const { t } = useApp()
  
  const experiences = [
    {
      company: "EvolveChat",
      position: t('softwareEngineer'),
      duration: `March 2024 - ${t('present')}`,
      location: t('remote'),
      responsibilities: [
        t('exp1_1'), t('exp1_2'), t('exp1_3'), t('exp1_4'), 
        t('exp1_5'), t('exp1_6'), t('exp1_7'), t('exp1_8')
      ]
    },
    {
      company: "BEEPORT",
      position: t('systemManager'),
      duration: "January 2020 – August 2020",
      location: t('remote'),
      responsibilities: [
        t('exp2_1'), t('exp2_2'), t('exp2_3'), t('exp2_4'), t('exp2_5')
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('experienceTitle')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <h4 className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0 text-right">
                  <div>{exp.duration}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-2">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience