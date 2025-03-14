import {RouteObject} from 'react-router-dom'
import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {ReactNode} from 'react'

export enum AppRouteNames {
  MAIN = 'main',
  ABOUT = 'about'
}

export type AppRouteType = Record<AppRouteNames, string>

export const RoutePaths: AppRouteType = {
  [AppRouteNames.MAIN]: '/',
  [AppRouteNames.ABOUT]: '/about',
}

export type RoutesConfigType = Record<AppRouteNames, {path: string, element: any}>

export const routesConfig: RoutesConfigType = {
  [AppRouteNames.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />
  },
  [AppRouteNames.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />
  },
}
