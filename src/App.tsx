import React, { useState } from 'react'
import { Home, Projects, ProjectDetail, Contact } from './pages'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components'

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'contact'>('home')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const handleSetActiveTab = (tab: 'home' | 'projects' | 'contact') => {
    setSelectedProjectId(null)
    setActiveTab(tab)
  }

  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={handleSetActiveTab} />

      <main className="flex-1 pt-20">
        {activeTab === 'home' && (
          <Home
            onViewProjects={() => handleSetActiveTab('projects')}
            onViewContact={() => handleSetActiveTab('contact')}
          />
        )}
        {activeTab === 'projects' &&
          (selectedProjectId ? (
            <ProjectDetail projectId={selectedProjectId} onBack={() => setSelectedProjectId(null)} />
          ) : (
            <Projects onOpenProject={setSelectedProjectId} />
          ))}
        {activeTab === 'contact' && <Contact />}
      </main>

      <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8 transition-colors duration-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">
            © {new Date().getFullYear()} Vitor Santana. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">Desenvolvido com React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
