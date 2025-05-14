import {MainPage} from '@/pages/MainPage'
import {ProfilePage} from '@/pages/ProfilePage'
import {ArticlesPage} from '@/pages/ArticlesPage'
import {ArticleDetailsPage} from '@/pages/ArticleDetailsPage'
import {AboutPage} from '@/pages/AboutPage'
import {ForbiddenPage} from '@/pages/ForbiddenPage'
import {AdminPanelPage} from '@/pages/AdminPanelPage'
import {UserRoles} from '@/entities/User'
import {NotFoundPage} from '@/pages/NotFoundPage'
import {AppRouteNames, RoutePaths} from '@/shared/const/routers'
import {RoutesConfigType} from '@/shared/types/router'

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
