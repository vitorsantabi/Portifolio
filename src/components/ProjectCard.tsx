import React from 'react'
import { ArrowRight, Github } from 'lucide-react'
import { Project } from '../types'

interface ProjectCardProps {
  project: Project
  onViewDetails: () => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <article className="group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ring-1 ring-gray-100 dark:ring-gray-700">
      <button
        type="button"
        onClick={onViewDetails}
        className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded-t-xl"
        aria-label={`Ver detalhes de ${project.title}`}
      >
        <div className="relative overflow-hidden h-44 sm:h-52 md:h-56 bg-gray-200 dark:bg-gray-700">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-sm font-medium">
            <span>Ver detalhes</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </div>
      </button>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 transition-all duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-gray-900 active:scale-95"
          >
            Detalhes
            <ArrowRight size={16} />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:gap-3 active:scale-95"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
