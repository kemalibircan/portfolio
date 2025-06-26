'use client'
import { ExternalLink, Github } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

const Projects = () => {
  const { t } = useApp()
  
  const projects = [
    {
      title: t('project1Title'),
      year: "2023",
      description: t('project1Desc'),
      technologies: ["React Native", "Node.js", "Express.js", "PostgreSQL", "Redux", "Google Maps API", "WebSocket", "AWS"],
      demoUrl: "https://kemalibircan.github.io/SubPages/Otostop.html",
      githubUrl: "https://github.com/kemalibircan"
    },
    {
      title: t('project2Title'),
      year: "2023",
      description: t('project2Desc'),
      technologies: ["React Native", "Node.js", "Express.js", "PostgreSQL", "ChatGPT API"],
      githubUrl: "https://github.com/kemalibircan/BigChat"
    },
    {
      title: t('project3Title'),
      year: "2023",
      description: t('project3Desc'),
      technologies: ["React Native", "Google Firebase", "Cloud Database", "Real-time messaging"],
      githubUrl: "https://github.com/kemalibircan/ChatGuys"
    }
  ]

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('projectsTitle')}
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 py-1 rounded">
                  {project.year}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    {t('demo')}
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                >
                  <Github size={16} />
                  {t('code')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects