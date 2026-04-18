import React from 'react'
import { ArrowRight, FolderKanban, Mail } from 'lucide-react'
import avatarImg from '../assets/projetos/Avatar.jpg'

interface HomeProps {
  onViewProjects: () => void
  onViewContact: () => void
}

export const Home: React.FC<HomeProps> = ({ onViewProjects, onViewContact }) => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-10 sm:py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="flex justify-center order-1 animate-fade-in">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/25">
              <img
                src={avatarImg}
                alt="Vitor Santana"
                className="w-200vw h-200vh object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-blue-600 dark:border-blue-400 opacity-25 pointer-events-none" />
            </div>
          </div>

          <div className="order-2 text-center md:text-left animate-fade-in max-w-xl mx-auto md:mx-0 md:max-w-none">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
              Olá, sou{' '}
              <span className="gradient-text">Vitor Santana</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4 sm:mb-6">
              Programador Júnior
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
              Sou um desenvolvedor apaixonado por tecnologia, focado em desenvolvimento web e mobile. Tenho
              experiência com React, PHP e bancos de dados, e estou sempre buscando evoluir minhas
              habilidades e criar soluções modernas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                type="button"
                onClick={onViewProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <FolderKanban size={20} />
                Ver projetos
                <ArrowRight size={18} className="opacity-90" />
              </button>
              <button
                type="button"
                onClick={onViewContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-gray-900 active:scale-[0.98]"
              >
                <Mail size={20} />
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
