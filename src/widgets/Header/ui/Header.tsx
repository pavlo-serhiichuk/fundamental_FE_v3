import {type FC, useState} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {useTranslation} from 'react-i18next'
import * as s from './Header.module.scss'
import {Button} from '../../../shared/ui/Button/Button'
import {Modal} from '../../../shared/ui/Modal/Modal'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = (props) => {
  const {t} = useTranslation()
  const {className} = props
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  const onCloseSignInModal = () => {
    setIsSignInModalOpen(false)
  }

  const onOpen = () => {
    setIsSignInModalOpen(true)
  }

  return (
    <div className={cls(s.Header, {}, [className])}>
      <Modal isOpen={isSignInModalOpen} onClose={onCloseSignInModal}>Modal</Modal>
      <div className={s.links}>
        <Button onClick={onOpen} theme="bordered">{t('Sign in')}</Button>
      </div>
    </div>
  )
}
