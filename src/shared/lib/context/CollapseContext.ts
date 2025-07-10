import { createContext } from 'react'

interface CollapseContextProps {
  collapsed?: boolean
  setCollapsed?: (args: any) => void
}

export const CollapseContext = createContext<CollapseContextProps>({})
