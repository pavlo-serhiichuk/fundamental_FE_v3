import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {ProfilePage} from 'pages/ProfilePage'
import {type RouteProps} from 'react-router/dist/lib/components'
import {ArticlesPage} from 'pages/ArticlesPage'
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found'
}

export type AppRouteType = Record<AppRouteNames, string>

export const RoutePaths: AppRouteType = {
  [AppRouteNames.MAIN]: '/',
  [AppRouteNames.ABOUT]: '/about',
  [AppRouteNames.PROFILE]: '/profile/',
  [AppRouteNames.ARTICLES]: '/articles',
  [AppRouteNames.ARTICLE_DETAILS]: '/articles/', // :id
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
  [AppRouteNames.ARTICLES]: {
    path: RoutePaths.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRouteNames.ARTICLE_DETAILS]: {
    path: `${RoutePaths.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
}
