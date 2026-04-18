import React from 'react'
import { SocialLink as SocialLinkType } from '../types'

interface SocialLinkProps {
  link: SocialLinkType
}

export const SocialLink: React.FC<SocialLinkProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-125 hover:shadow-lg"
      aria-label={link.name}
      title={link.name}
    >
      <span className="transition-transform duration-300 group-hover:scale-125">
        {link.icon}
      </span>
    </a>
  )
}
