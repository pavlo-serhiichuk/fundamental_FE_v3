import type React from 'react'

export interface ISidebarItem {
  name: string
  path: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>> | string
  authOnly?: boolean
}
