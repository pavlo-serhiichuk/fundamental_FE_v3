import {type FC, useCallback, useState} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {SignInModal} from 'features/SignIn/ui/SignInModal/SignInModal'
import {Button} from 'shared/ui/Button/Button'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User/module/selectors/getUserAuthData'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {userActions} from 'entities/User'
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

  const onSignOut = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={cls(s.Header, {}, [className])}>
        <div className={s.links}>
          <Button onClick={onSignOut} theme="bordered">{t('Sign out')}</Button>
        </div>
      </div>
    )
  }

  return (
    <div className={cls(s.Header, {}, [className])}>
      <SignInModal isOpen={isSignInModalOpen} onClose={onCloseSignInModal} />
      <div className={s.links}>
        <Button onClick={onOpen} theme="bordered">{t('Sign in')}</Button>
      </div>
    </div>
  )
}
