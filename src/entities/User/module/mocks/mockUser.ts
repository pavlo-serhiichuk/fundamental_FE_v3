import { User } from '../types/UserSchema'
import { UserRoles } from '../consts/consts'

export const mockUser: User = {
  id: '5',
  username: 'testuser',
  roles: [UserRoles.USER, UserRoles.MANAGER, UserRoles.ADMIN],
  features: {
    isV2: false,
    isArticleDetailsRatingEnabled: true,
    isProfileRatingEnabled: true,
  },
  jsonSettings: {
    theme: 'app_dark_theme',
    isFirstVisit: true,
    settingsPageHasBeenOpened: false,
    articlesPageHasBeenOpened: true,
  },
  avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858578.png',
}
