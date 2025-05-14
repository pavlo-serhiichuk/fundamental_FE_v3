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
export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/create'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
