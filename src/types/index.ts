export interface Project {
  id: string
  title: string
  description: string
  /** Texto completo na página de detalhe do projeto */
  longDescription: string
  image: string
  github: string
  technologies: string[]
  highlights: string[]
}

export interface SocialLink {
  id: string
  name: string
  url: string
  icon: React.ReactNode
}
