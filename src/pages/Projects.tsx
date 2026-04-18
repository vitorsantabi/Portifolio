import React from 'react'
import { ProjectCard } from '../components'
import { projects } from '../data/projects'

interface ProjectsProps {
  onOpenProject: (projectId: string) => void
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProject }) => {
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-80px)] section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-1">
            Alguns dos meus trabalhos. Passe o cursor sobre os cards, abra os detalhes ou o repositório no
            GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <ProjectCard project={project} onViewDetails={() => onOpenProject(project.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
