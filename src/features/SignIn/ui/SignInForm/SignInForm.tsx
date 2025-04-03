import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {Button} from 'shared/ui/Button/Button'
import * as s from './SignInForm.module.scss'

interface SignInFormProps {
  className?: string
}

export const SignInForm = (props: SignInFormProps) => {
  const {className} = props
  const {t} = useTranslation()
  return (
    <div className={cls(s.SignInForm, {}, [className])}>
      <h6>
        {t('Sign in')}
        :
      </h6>
      <Input placeholder="Enter username..." />
      <Input placeholder="Enter password..." />
      <Button theme="bordered">{t('Apply')}</Button>
    </div>
  )
}
