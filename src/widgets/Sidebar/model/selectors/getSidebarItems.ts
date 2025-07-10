import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import AboutUsIconDeprecated from '@/shared/assets/icons/about_us.svg'
import MainIconDeprecated from '@/shared/assets/icons/main.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg'
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg'
import AboutUsIcon from '@/shared/assets/icons/indo.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import ArticlesIcon from '@/shared/assets/icons/notes2.svg'
import SettingsIcon from '@/shared/assets/icons/settings.svg'
import { type ISidebarItem } from '../types/sidebar'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/routers'
import { getFeatureFlags, toggleFeatures } from '@/shared/lib/features'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const isV2 = getFeatureFlags('isV2')
  const sidebarItems: ISidebarItem[] = [
    {
      name: 'About us',
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isV2',
        off: () => AboutUsIconDeprecated,
        on: () => AboutUsIcon,
      }),
    },
    {
      name: 'Main',
      path: getRouteMain(),
      Icon: MainIconDeprecated,
    },
  ]

  if (isV2) {
    sidebarItems.pop()
  }

  if (userData) {
    sidebarItems.unshift(
      {
        name: 'Profile',
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isV2',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
      },
      {
        name: 'Articles',
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isV2',
          off: () => ArticlesIconDeprecated,
          on: () => ArticlesIcon,
        }),
      },
    )

    sidebarItems.push({
      name: 'Settings',
      path: getRouteSettings(),
      Icon: toggleFeatures({
        name: 'isV2',
        off: () => SettingsIcon,
        on: () => SettingsIcon,
      }),
    })
  }

  return sidebarItems
})
