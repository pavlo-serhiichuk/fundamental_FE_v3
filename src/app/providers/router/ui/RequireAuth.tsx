import {Children, ReactNode} from 'react'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User'
import {Navigate, useLocation} from 'react-router-dom'

interface RequireAuthProps {
  children?: ReactNode
}

export const RequireAuth = (props: RequireAuthProps) => {
  const {children} = props
  const isAuth = useSelector(getUserAuthData)
  const location = useLocation()
  if (!isAuth) {
    return <Navigate to="/" state={{from: location}} replace />
  }

  return children
}
