import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getIsUserAdmin,
  getIsUserManager,
  getUserAuthData,
  userActions,
} from '@/entities/User'
import { Dropdown as DropdownDepricated } from '@/shared/ui/deprecated/Popups'
import { Avatar as AvatarDepricated } from '@/shared/ui/deprecated/Avatar'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/routers'
import * as s from './AvatarDropdown.module.scss'
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature'
import { Dropdown } from '@/shared/ui/V2/Popups'
import { Avatar } from '@/shared/ui/V2/Avatar'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {
  const { t } = useTranslation()
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
    ...(isAdminPageAvailable
      ? [
          {
            content: t('Admin'),
            onClick: () => {
              navigate(getRouteAdmin())
            },
          },
        ]
      : []),
    {
      content: t('Profile'),
      onClick: () => {
        navigate(getRouteProfile(authData.id || ''))
      },
    },
    {
      content: t('Exit'),
      onClick: onLogout,
    },
  ]

  return (
    <ToggleFeature
      feature="isV2"
      on={
        <Dropdown
          items={items}
          dropdownClassName={s.dropdown}
          trigger={
            <Avatar
              size={45}
              src={authData.avatar}
              alt={authData.username}
              className={s.AvatarIcon}
            />
          }
          direction="bottom left"
        />
      }
      off={
        <DropdownDepricated
          items={items}
          trigger={
            <AvatarDepricated
              size={45}
              src={authData.avatar}
              alt={authData.username}
              className={s.AvatarIcon}
            />
          }
          direction="bottom left"
        />
      }
    />
  )
})
