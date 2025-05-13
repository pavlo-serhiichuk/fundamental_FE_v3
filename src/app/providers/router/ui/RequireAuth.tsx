import {ReactNode, useMemo} from 'react'
import {useSelector} from 'react-redux'
import {Navigate, useLocation} from 'react-router-dom'
import {getUserAuthData, getUserRoles, UserRoles} from '@/entities/User'

import {RoutePaths} from '@/shared/const/routers'

interface RequireAuthProps {
  children?: ReactNode
  roles?: UserRoles[]
}

export const RequireAuth = (props: RequireAuthProps) => {
  const {children, roles = []} = props
  const isAuth = useSelector(getUserAuthData)
  const location = useLocation()
  const currentUserRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles.length) {
      return true
    }
    return roles.some((role) => currentUserRoles?.includes(role))
  }, [roles, currentUserRoles])

  if (!isAuth) {
    return <Navigate to="/" state={{from: location}} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePaths.forbidden} state={{from: location}} replace />
  }

  return children
}
