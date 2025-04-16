import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {ProfilePage} from 'pages/ProfilePage'
import {type RouteProps} from 'react-router/dist/lib/components'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export type AppRouteType = Record<AppRouteNames, string>

export const RoutePaths: AppRouteType = {
  [AppRouteNames.MAIN]: '/',
  [AppRouteNames.ABOUT]: '/about',
  [AppRouteNames.PROFILE]: '/profile/',
  [AppRouteNames.NOT_FOUND]: '*',
}

export type RoutesConfigType = Record<AppRouteNames, AppRoutesProps>

export const routesConfig: RoutesConfigType = {
  [AppRouteNames.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRouteNames.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRouteNames.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
  [AppRouteNames.PROFILE]: {
    path: `${RoutePaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
}
