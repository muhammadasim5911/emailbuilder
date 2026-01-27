import { useEffect } from 'react'
import './App.css'
import EditorPage from './pages/EditorPage'
import { useUserStore } from './store'

function App() {
  const { setUser, setFeatures } = useUserStore()

  // Initialize user with all features enabled for testing
  useEffect(() => {
    setUser({
      id: 'user-1',
      name: 'Demo User',
      email: 'demo@emailbuilder.com',
      plan: 'enterprise',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })

    // Enable all features for testing
    // @ts-ignore - Feature flags type needs updating
    setFeatures({
      advancedElements: true,
      advancedStyling: true,
      exportFormats: true,
      aiAssistant: true,
      teamCollaboration: true,
      advancedLayouts: true,
      proTemplates: true,
      customFonts: true,
      bulkExport: true,
      integrations: true,
      prioritySupport: true,
    })
  }, [setUser, setFeatures])

  return <EditorPage />
}

export default App
