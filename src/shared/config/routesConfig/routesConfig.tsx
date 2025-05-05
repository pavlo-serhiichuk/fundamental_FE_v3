import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {ProfilePage} from 'pages/ProfilePage'
import {type RouteProps} from 'react-router/dist/lib/components'
import {ArticlesPage} from 'pages/ArticlesPage'
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage'
import {ForbiddenPage} from 'pages/ForbiddenPage'
import {AdminPanelPage} from 'pages/AdminPanelPage'
import {UserRoles} from 'entities/User/module/types/UserSchema'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRoles[]
}

export enum AppRouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails',
  FORBIDDEN = 'forbidden',
  ADMIN_PANEL = 'admin_panel',
  NOT_FOUND = 'not_found'
}
export type AppRouteType = Record<AppRouteNames, string>

export const RoutePaths: AppRouteType = {
  [AppRouteNames.MAIN]: '/',
  [AppRouteNames.ABOUT]: '/about',
  [AppRouteNames.PROFILE]: '/profile/',
  [AppRouteNames.ARTICLES]: '/articles',
  [AppRouteNames.ARTICLE_DETAILS]: '/articles/', // :id
  [AppRouteNames.ADMIN_PANEL]: '/admin', // :id
  [AppRouteNames.FORBIDDEN]: '/forbidden', // :id
  [AppRouteNames.NOT_FOUND]: '*',
}

export type RoutesConfigType = Record<AppRouteNames, AppRoutesProps>

export const routesConfig: RoutesConfigType = {
  [AppRouteNames.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
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
    path: `${RoutePaths.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRouteNames.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRouteNames.FORBIDDEN]: {
    path: RoutePaths.forbidden,
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRouteNames.ADMIN_PANEL]: {
    path: RoutePaths.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },

  // last
  [AppRouteNames.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/create'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
