import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/cls/cls'
import { SignInModal } from '@/features/SignIn'
import { Button } from '@/shared/ui/deprecated/Button'
import { getUserAuthData } from '@/entities/User'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import EditIcon from '@/shared/assets/icons/edit.svg'
import { NotificationsButton } from '@/features/NotificationsButton'
import * as s from './Header.module.scss'
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature'
import { Icon } from '@/shared/ui/deprecated/Icon'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props
  const authData = useSelector(getUserAuthData)
  const { t } = useTranslation()
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  const onCloseSignInModal = () => {
    setIsSignInModalOpen(false)
  }

  const onOpen = () => {
    setIsSignInModalOpen(true)
  }

  if (authData) {
    return (
      <ToggleFeature
        feature="isV2"
        on={
          <header className={cls(s.HeaderV2, {}, [className])}>
            <div className={s.links}>
              <Icon Svg={EditIcon} height={25} width={25} />
              <NotificationsButton />
              <AvatarDropdown />
            </div>
          </header>
        }
        off={
          <header className={cls(s.Header, {}, [className])}>
            <div className={s.links}>
              <NotificationsButton />
              <AvatarDropdown />
            </div>
          </header>
        }
      />
    )
  }

  return (
    <ToggleFeature
      feature="isV2"
      on={
        <header className={cls(s.HeaderV2, {}, [className])}>
          {isSignInModalOpen && (
            <SignInModal
              isOpen={isSignInModalOpen}
              onClose={onCloseSignInModal}
            />
          )}
          <div className={s.links}>
            <Button onClick={onOpen} theme="bordered">
              {t('Sign in')}
            </Button>
          </div>
        </header>
      }
      off={
        <header className={cls(s.Header, {}, [className])}>
          {isSignInModalOpen && (
            <SignInModal
              isOpen={isSignInModalOpen}
              onClose={onCloseSignInModal}
            />
          )}
          <div className={s.links}>
            <Button onClick={onOpen} theme="bordered">
              {t('Sign in')}
            </Button>
          </div>
        </header>
      }
    />
  )
}
