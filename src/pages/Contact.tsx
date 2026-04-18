import React from 'react'
import { SocialLink } from '../components'
import { SocialLink as SocialLinkType } from '../types'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Contact: React.FC = () => {
  const socialLinks: SocialLinkType[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vitorsantab/',
      icon: <Linkedin size={24} />,
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/vitorsantabi',
      icon: <Github size={24} />,
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      url: 'https://x.com/vitorsantab',
      icon: (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.66-5.852 6.66H2.424l7.732-8.835L.424 2.25h6.679l4.632 6.124L16.077 2.25h.167zm-1.2 19.5h1.836L7.326 4.156H5.424z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container-max w-full px-4">
        <div className="text-center animate-fade-in">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Estou sempre aberto para novas oportunidades e projetos interessantes.
            Conecte-se comigo através das redes sociais!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {socialLinks.map((link) => (
              <SocialLink key={link.id} link={link} />
            ))}
          </div>

          {/* Email CTA */}
          <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-8 sm:p-12 inline-block">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ou envie um email diretamente:
            </p>
            <a
              href="mailto:vitorsantabi@gmail.com"
              className="inline-flex items-center gap-3 text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <Mail size={28} />
              vitorsantabi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
