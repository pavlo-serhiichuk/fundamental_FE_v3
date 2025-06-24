import { ReactElement } from 'react'
import { AppRouteNames } from '@/shared/const/routers'
import { ScrollToolbar } from '@/widgets/ScrollToolbar'
import { useCurrentRoute } from '@/shared/hooks/useCurrentRoute'

export function useAppToolbar() {
  const currentRoute = useCurrentRoute()
  const toolbarByAppRoute: Partial<Record<AppRouteNames, ReactElement>> = {
    [AppRouteNames.ARTICLES]: <ScrollToolbar />,
    [AppRouteNames.ARTICLE_DETAILS]: <ScrollToolbar />,
  }

  return toolbarByAppRoute[currentRoute]
}
