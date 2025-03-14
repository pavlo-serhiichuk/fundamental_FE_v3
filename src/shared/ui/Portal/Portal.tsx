import { type FC, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  container?: DocumentFragment
}

export const Portal: FC<PortalProps> = ({ children, container = document.body }) => {
  return createPortal(children, container)
}
