import {getUserAuthData} from '@/entities/User'
import {createSelector} from '@reduxjs/toolkit'
import AboutUsIcon from '@/shared/assets/icons/about_us.svg'
import MainIcon from '@/shared/assets/icons/main.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import {RoutePaths} from '@/shared/config/routesConfig/routesConfig'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import {type ISidebarItem} from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: ISidebarItem[] = [
    {
      name: 'About us',
      path: RoutePaths.about,
      Icon: AboutUsIcon,
    }, {
      name: 'Main',
      path: RoutePaths.main,
      Icon: MainIcon,
    },
  ]

  if (userData) {
    sidebarItems.unshift({
      name: 'Profile',
      path: RoutePaths.profile + userData.id,
      Icon: ProfileIcon,
    }, {
      name: 'Articles',
      path: RoutePaths.articles,
      Icon: ArticlesIcon,
    })
  }

  return sidebarItems
})
