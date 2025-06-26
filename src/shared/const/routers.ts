export enum AppRouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails',
  ARTICLE_EDIT = 'articleEdit',
  ARTICLE_CREATE = 'articleCreate',
  FORBIDDEN = 'forbidden',
  ADMIN_PANEL = 'admin_panel',
  NOT_FOUND = 'not_found',
  SETTINGS = 'settings',
}

export type AppRouteType = Record<AppRouteNames, string>

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string | undefined) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string = '0') => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/create'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
export const getRouteSettings = () => '/settings'

export const AppRouteByPathPattern: Record<string, AppRouteNames> = {
  [getRouteMain()]: AppRouteNames.MAIN,
  [getRouteAbout()]: AppRouteNames.ABOUT,
  [getRouteProfile(':id')]: AppRouteNames.PROFILE,
  [getRouteArticles()]: AppRouteNames.ARTICLES,
  [getRouteArticleDetails()]: AppRouteNames.ARTICLE_DETAILS,
  // [getRouteArticleCreate()]: AppRouteNames.,
  // [getRouteArticleEdit()]: AppRouteNames.,
  [getRouteAdmin()]: AppRouteNames.ADMIN_PANEL,
  [getRouteForbidden()]: AppRouteNames.FORBIDDEN,
  [getRouteSettings()]: AppRouteNames.SETTINGS,
}
