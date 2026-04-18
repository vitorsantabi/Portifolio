# 🎨 Portfólio Moderno - Vitor Santana

Um portfólio interativo e responsivo desenvolvido com **React.js**, **TypeScript**, **Tailwind CSS** e **Vite**. Apresenta um design minimalista e profissional com animações suaves e suporte a tema escuro/claro.

---

## ✨ Funcionalidades

### 🌓 Tema Dinâmico
- **Dark Mode / Light Mode**: Alternar entre tema claro e escuro com um clique
- **Persistência**: O tema escolhido é salvo no `localStorage`
- **Transições suaves**: Todas as mudanças de tema acontecem com animações fluidas

### 🎯 Navegação
- **Navbar fixa** no topo com efeito visual ao rolar
- **Links suaves** entre seções (smooth scroll)
- **Menu responsivo** para dispositivos móveis
- **Logo interativo** que retorna ao topo

### 📱 Seções

#### 1. **Home** (`#home`)
- Apresentação pessoal com imagem de perfil circular
- Nome: **Vitor Santana**
- Cargo: **Programador Júnior**
- Bio profissional
- Botões de CTA (Call-to-Action)
- Animação de scroll indicator

#### 2. **Projetos** (`#projects`)
- Grid responsivo com **3 cards modernos**
- Cada card contém:
  - Imagem/GIF do projeto
  - Nome e descrição
  - Botão direto para GitHub
  - Efeito hover com elevação
  - Animações staggered

**Projetos incluídos:**
1. **VSocial** - Rede social com login e perfil
2. **Music Play App** - App mobile em React Native
3. **Wiki Arquétipos** - Wiki com organização de conteúdo

#### 3. **Contato** (`#contact`)
- **Ícones sociais interativos** com hover effects
- Links para:
  - **LinkedIn**: https://www.linkedin.com/in/vitorsantab/
  - **GitHub**: https://github.com/vitorsantabi
  - **X (Twitter)**: https://x.com/vitorsantab
- **Email direto**: vitorsantabi@gmail.com
- Layout centralizado e elegante

### 🎨 Design & Animações

- **Animações fade-in** para seções ao rolar
- **Transições de cor** suaves
- **Efeito de elevação** em cards ao passar o mouse
- **Bounce animation** no scroll indicator
- **Transformação de escala** em elementos interativos
- **Gradiente de texto** nos títulos principais

### 📱 Responsividade

- **Mobile-first**: Otimizado para todos os tamanhos de tela
- **Breakpoints Tailwind**: sm, md, lg
- **Menu hamburger** automático em dispositivos pequenos
- **Grid fluído** que se adapta (1 col móvel → 3 colunas desktop)

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 18.3+ | Framework principal |
| **TypeScript** | 5.3+ | Type safety |
| **Vite** | 5.0+ | Build tool & dev server |
| **Tailwind CSS** | 3.4+ | Estilização |
| **Lucide React** | 0.344+ | Ícones SVG |
| **React Icons** | 5.0+ | Biblioteca de ícones |

---

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.tsx          # Menu fixo com navegação
│   ├── ThemeToggle.tsx     # Botão dark/light mode
│   ├── ProjectCard.tsx     # Card dos projetos
│   ├── SocialLink.tsx      # Ícone de rede social
│   └── index.ts            # Exports
├── pages/
│   ├── Home.tsx            # Seção inicial
│   ├── Projects.tsx        # Lista de projetos
│   ├── Contact.tsx         # Contato e links
│   └── index.ts            # Exports
├── context/
│   └── ThemeContext.tsx    # Context para tema global
├── types/
│   └── index.ts            # TypeScript types
├── assets/
│   └── projetos/
│       ├── Avatar.jpg      # Foto de perfil
│       ├── phpVSocial.gif  # Screenshot VSocial
│       ├── musicmais.gif   # Screenshot Music Play
│       └── WikiArquetipos.gif
├── App.tsx                 # Componente raiz
├── main.tsx                # Entry point
├── index.css               # Estilos globais + Tailwind
├── vite.config.ts          # Configuração Vite
├── tailwind.config.js      # Configuração Tailwind
├── postcss.config.js       # Configuração PostCSS
└── tsconfig.*.json         # Config TypeScript

public/
└── (assets estáticos)

package.json               # Dependências
index.html                 # HTML template
```

---

## 🚀 Como Executar

### Instalação

```bash
# Instalar dependências
npm install

# Ou com yarn
yarn install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acessar em http://localhost:5173
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

---

## 🎯 Componentes Principais

### `ThemeProvider` (`context/ThemeContext.tsx`)
- Gerencia tema global (light/dark)
- Persiste preferência no localStorage
- Respeita `prefers-color-scheme` do SO

### `Navbar` (`components/Navbar.tsx`)
- Fixa no topo com efeito de sombra ao rolar
- Menu responsivo com hamburger
- Navegação suave para seções

### `ProjectCard` (`components/ProjectCard.tsx`)
- Card responsivo com imagem
- Hover effects e animações
- Link direto para GitHub

### `useTheme` Hook
```typescript
const { theme, toggleTheme } = useTheme()
```

---

## 🎨 Customização

### Cores Personalizadas

No `tailwind.config.js`, você pode alterar a cor primária:

```js
colors: {
  primary: {
    600: '#YourColor'  // Customize aqui
  }
}
```

### Adicionar Mais Projetos

No `src/pages/Projects.tsx`, adicione na array `projects`:

```tsx
{
  id: 'seu-projeto',
  title: 'Título',
  description: 'Descrição curta',
  image: importedImage,
  github: 'https://github.com/...'
}
```

---

## 📊 Performance

- ⚡ **Vite**: Instant Module Replacement (HMR)
- 🎯 **Code Splitting**: Automático por rotas
- 🖼️ **Otimização de Imagens**: Suporte nativo
- 📦 **Bundle Size**: ~150KB gzipped

---

## 🔒 Segurança

- ✅ TypeScript: Type safety completo
- ✅ ESM: Módulos modernos
- ✅ HTTPS-ready: Pronto para deploy

---

## 📱 Browsers Suportados

- ✅ Chrome/Edge (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (versão 14+)
- ✅ Mobile (iOS Safari, Chrome Mobile)

---

## 🤝 Contribuindo

Sinta-se livre para fazer fork, modificar e melhorar o projeto!

---

## 📝 Licença

Este projeto está sob licença **MIT**. Você é livre para usar como portfólio pessoal.

---

## 👨‍💻 Autor

**Vitor Santana**
- 🔗 GitHub: https://github.com/vitorsantabi
- 💼 LinkedIn: https://www.linkedin.com/in/vitorsantab/
- 🐦 Twitter: https://x.com/vitorsantab

---

## 💡 Próximas Melhorias Sugeridas

- [ ] Adicionar formulário de contato funcional
- [ ] Integração com API de envio de emails
- [ ] Blog/Artigos técnicos
- [ ] Seção de Skills/Habilidades
- [ ] Animações com Framer Motion
- [ ] SEO otimizado com meta tags
- [ ] Analytics (Google Analytics)

---

**Desenvolvido com ❤️ em React.js**


## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
