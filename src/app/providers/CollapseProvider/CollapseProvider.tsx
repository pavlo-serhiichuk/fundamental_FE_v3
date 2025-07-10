import { ReactNode, useState } from 'react'
import { CollapseContext } from '@/shared/lib/context/CollapseContext'

interface CollapseProviderProps {
  children: ReactNode
}

export function CollapseProvider({ children }: CollapseProviderProps) {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <CollapseContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </CollapseContext.Provider>
  )
}
