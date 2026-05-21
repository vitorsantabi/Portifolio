import React from 'react'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { getProjectById } from '../data/projects'

interface ProjectDetailProps {
  projectId: string
  onBack: () => void
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const project = getProjectById(projectId)

  if (!project) {
    return (
      <section className="min-h-[calc(100vh-80px)] section-padding flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Projeto não encontrado.</p>
          <button type="button" onClick={onBack} className="btn-primary">
            Voltar aos projetos
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-[calc(100vh-80px)] section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-8 hover:gap-3 transition-all duration-300 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          Voltar aos projetos
        </button>

        <article className="max-w-6xl mx-auto animate-fade-in">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700 ring-1 ring-gray-200 dark:ring-gray-600">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full min-h-[720px] max-h-[500px] object-contain "
              />
            </div>

            <div className="space-y-8">
              <header>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </header>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Destaques
                </h2>
                <ul className="space-y-3 list-disc list-inside marker:text-blue-600 dark:marker:text-blue-400 text-gray-700 dark:text-gray-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg active:scale-[0.98]"
                >
                  <Github size={20} />
                  Ver no GitHub
                  <ExternalLink size={16} className="opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
