import type React from 'react'

export interface ISidebarItem {
  name: string
  path: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>> | string
  authOnly?: boolean
}
