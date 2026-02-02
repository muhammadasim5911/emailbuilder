import { useEffect } from 'react'
import './App.css'
import { EmailTemplateBuilder } from './components/EmailTemplateBuilder'
import { useUserStore } from './store'
import type { MergeTag } from './types'

function App() {
  const { setUser, setFeatures } = useUserStore()

  // Define demo merge tags
  const demoMergeTags: MergeTag[] = [
    { id: '1', label: 'First Name', value: '{{firstname}}', category: 'user', trigger: '@' },
    { id: '2', label: 'Last Name', value: '{{lastname}}', category: 'user', trigger: '@' },
    { id: '3', label: 'Full Name', value: '{{fullname}}', category: 'user', trigger: '@' },
    { id: '4', label: 'Email', value: '{{email}}', category: 'user', trigger: '@' },
    { id: '5', label: 'Company', value: '{{company}}', category: 'custom', trigger: '#' },
  ];

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
    setFeatures({
      advancedElements: true,
      advancedLayout: true,
      advancedStyling: true,
      proTemplates: true,
      bulkExport: true,
      integrations: true,
      analytics: true,
      teamManagement: true,
    })
  }, [setUser, setFeatures])

  return (
    <EmailTemplateBuilder 
      mergeTags={demoMergeTags}
      mergeTagTriggers={['@', '#']}
      showFooter={true}
    />
  )
}

export default App

