import { matchPath, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AppRouteByPathPattern, AppRouteNames } from '@/shared/const/routers'

export const useCurrentRoute = () => {
  const location = useLocation()
  const [appRoute, setAppRoute] = useState(AppRouteNames.MAIN)
  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route)
      }
    })
  }, [location.pathname])
  return appRoute
}
