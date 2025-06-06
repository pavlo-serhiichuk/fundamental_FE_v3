import { MainPage } from '@/pages/MainPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { AboutPage } from '@/pages/AboutPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { UserRoles } from '@/entities/User'
import { NotFoundPage } from '@/pages/NotFoundPage'
import {
  AppRouteNames,
  getRouteAbout,
  getRouteAdmin,
  getRouteArticleDetails,
  getRouteArticles,
  getRouteForbidden,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/routers'
import { RoutesConfigType } from '@/shared/types/router'

export const routesConfig: RoutesConfigType = {
  [AppRouteNames.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRouteNames.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRouteNames.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRouteNames.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRouteNames.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRouteNames.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },
  [AppRouteNames.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
    authOnly: true,
  },

  // last
  [AppRouteNames.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
