import {createSelector} from '@reduxjs/toolkit'
import {getUserAuthData} from '@/entities/User'
import AboutUsIcon from '@/shared/assets/icons/about_us.svg'
import MainIcon from '@/shared/assets/icons/main.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import {type ISidebarItem} from '../types/sidebar'
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/routers'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: ISidebarItem[] = [
    {
      name: 'About us',
      path: getRouteAbout(),
      Icon: AboutUsIcon,
    }, {
      name: 'Main',
      path: getRouteMain(),
      Icon: MainIcon,
    },
  ]

  if (userData) {
    sidebarItems.unshift({
      name: 'Profile',
      path: getRouteProfile(userData.id),
      Icon: ProfileIcon,
    }, {
      name: 'Articles',
      path: getRouteArticles(),
      Icon: ArticlesIcon,
    })
  }

  return sidebarItems
})
