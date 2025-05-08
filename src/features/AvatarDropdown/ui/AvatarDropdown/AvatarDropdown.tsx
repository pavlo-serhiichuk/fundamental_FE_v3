import {FC, memo, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {
  getIsUserAdmin, getIsUserManager, getUserAuthData, userActions,
} from '@/entities/User'
import {Dropdown} from '@/shared/ui/Popups'
import {Avatar} from '@/shared/ui/Avatar/Avatar'
import {getRouteAdmin, getRouteProfile} from '@/shared/config/routesConfig/routesConfig'
import {useNavigate} from 'react-router-dom'

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {
  const {t} = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAdmin = useSelector(getIsUserAdmin)
  const isManager = useSelector(getIsUserManager)
  const isAdminPageAvailable = isAdmin || isManager
  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  const items = [
    ...(isAdminPageAvailable ? [{
      content: t('Admin'),
      onClick: () => { navigate(getRouteAdmin()) },

    }] : []),
    {
      content: t('Profile'),
      onClick: () => { navigate(getRouteProfile(authData.id || '')) },
    },
    {
      content: t('Exit'),
      onClick: onLogout,
    },
  ]

  return (
    <Dropdown
      items={items}
      trigger={<Avatar size={45} src={authData.avatar} alt={authData.username} />}
      direction="bottom left"
    />
  )
})
