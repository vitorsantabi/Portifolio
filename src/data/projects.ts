import type { Project } from '../types'
import vSocialImg from '../assets/projetos/phpVSocial.gif'
import musicImg from '../assets/projetos/musicmais.gif'
import wikiImg from '../assets/projetos/WikiArquetipos.gif'

export const projects: Project[] = [
  {
    id: 'vsocial',
    title: 'VSocial',
    description: 'Rede social com sistema de login, perfil, postagens e interação entre usuários.',
    longDescription:
      'O VSocial é uma rede social completa com cadastro e autenticação de usuários, perfis personalizáveis e feed de postagens. O foco está na interação entre membros da comunidade, com uma base sólida no back-end para persistência e segurança.',
    image: vSocialImg,
    github: 'https://github.com/vitorsantabi/VSocial',
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    highlights: [
      'Login e registro com sessão',
      'Perfil de usuário e edição de dados',
      'Postagens e interação no feed',
      'Estrutura preparada para evoluir com novas funcionalidades',
    ],
  },
  {
    id: 'music-play',
    title: 'Music Play App',
    description: 'Aplicativo mobile de reprodução de músicas desenvolvido em React Native.',
    longDescription:
      'Aplicativo mobile para ouvir músicas com interface pensada para uso no dia a dia. Desenvolvido em React Native, explora componentes nativos, navegação e gerenciamento de estado para uma experiência fluida em Android e iOS.',
    image: musicImg,
    github: 'https://github.com/vitorsantabi/Music-Play-React-Native-app',
    technologies: ['React Native', 'JavaScript', 'Mobile'],
    highlights: [
      'Player de áudio integrado',
      'Interface adaptada ao mobile',
      'Organização de faixas e controles de reprodução',
      'Base para integração com bibliotecas de mídia',
    ],
  },
  {
    id: 'wiki-arquetipos',
    title: 'Wiki Arquétipos',
    description: 'Aplicação estilo wiki com foco em arquétipos e organização de conteúdo.',
    longDescription:
      'Uma aplicação inspirada em wikis, dedicada a documentar e explorar arquétipos. O conteúdo é organizado de forma hierárquica e pesquisável, facilitando consultas e a manutenção de artigos ao longo do tempo.',
    image: wikiImg,
    github: 'https://github.com/vitorsantabi/WikiAppArquetipos',
    technologies: ['React', 'Web', 'UI'],
    highlights: [
      'Navegação por categorias e páginas',
      'Foco em leitura e organização do conteúdo',
      'Estrutura extensível para novos tópicos',
      'Visual limpo para estudo e consulta',
    ],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
