import {type FC, useState} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {SignInModal} from 'features/SignIn/ui/SignInModal/SignInModal'
import {Button} from 'shared/ui/Button/Button'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User/module/selectors/getUserAuthData'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {AvatarDropdown} from 'features/AvatarDropdown'
import {NotificationsButton} from 'features/NotificationsButton'
import * as s from './Header.module.scss'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = (props) => {
  const {className} = props
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  const onCloseSignInModal = () => {
    setIsSignInModalOpen(false)
  }

  const onOpen = () => {
    setIsSignInModalOpen(true)
  }

  if (authData) {
    return (
      <header className={cls(s.Header, {}, [className])}>
        <div className={s.links}>
          <NotificationsButton />
          <AvatarDropdown />
        </div>
      </header>
    )
  }

  return (
    <header className={cls(s.Header, {}, [className])}>
      {isSignInModalOpen && <SignInModal isOpen={isSignInModalOpen} onClose={onCloseSignInModal} />}
      <div className={s.links}>
        <Button onClick={onOpen} theme="bordered">{t('Sign in')}</Button>
      </div>
    </header>
  )
}
