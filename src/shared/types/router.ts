import type {RouteProps} from 'react-router/dist/lib/components'
import {UserRoles} from '@/entities/User'
import {AppRouteNames} from '@/shared/const/routers'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRoles[]
}

export type RoutesConfigType = Record<AppRouteNames, AppRoutesProps>
