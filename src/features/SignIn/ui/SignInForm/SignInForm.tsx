import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {Button} from 'shared/ui/Button/Button'
import {useSelector} from 'react-redux'
import {getSignInData} from 'features/SignIn/module/selectors/getSignInData/getSignInData'
import {signInActions} from 'features/SignIn/module/slice/signInSlice'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {fetchSignIn} from 'features/SignIn/module/thunks/fetchSignIn'
import {useCallback} from 'react'
import {Text} from 'shared/ui/Text/Text'
import * as s from './SignInForm.module.scss'

interface SignInFormProps {
  className?: string
}

export const SignInForm = (props: SignInFormProps) => {
  const {className} = props
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const {
    username, password, isLoading, error,
  } = useSelector(getSignInData)
  const onChangeUsername = (value: string) => {
    dispatch(signInActions.setUsername(value))
  }
  const onChangePassword = (value: string) => {
    dispatch(signInActions.setPassword(value))
  }

  const onSignIn = useCallback(() => {
    dispatch(fetchSignIn({username, password}))
  }, [password, username, dispatch])
  return (
    <div className={cls(s.SignInForm, {}, [className])}>
      <h4>
        {t('Sign in')}
        :
      </h4>
      {error && <Text text={error} theme="error" />}
      <Input placeholder="Enter username..." value={username} onChange={onChangeUsername} />
      <Input placeholder="Enter password..." value={password} onChange={onChangePassword} />
      <Button theme="bordered" onClick={onSignIn} disabled={isLoading}>{t('Apply')}</Button>
    </div>
  )
}
