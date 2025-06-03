import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {memo, useCallback, useMemo} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Input} from '@/shared/ui/Input'
import {Button} from '@/shared/ui/Button'
import {
  getSignInError,
  getSignInIsLoading,
  getSignInPassword,
  getSignInUsername,
} from '../../module/selectors/getSignInSelectors'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import {Text} from '@/shared/ui/Text'
import DynamicReducerLoader, {ReducersList} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import * as s from './SignInForm.module.scss'
import {signInReducer, signInActions} from '../../module/slice/signInSlice'
import {fetchSignIn} from '../../module/thunks/fetchSignIn'

export interface SignInFormProps {
    className?: string
    onSuccess?: () => void
}

const initialReducers: ReducersList = {
  signIn: signInReducer,
}

const SignInForm = memo((props: SignInFormProps) => {
  const {className, onSuccess} = props
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const username = useSelector(getSignInUsername)
  const password = useSelector(getSignInPassword)
  const isLoading = useSelector(getSignInIsLoading)
  const error = useSelector(getSignInError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(signInActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(signInActions.setPassword(value))
  }, [dispatch])

  const onSignIn = useCallback(async () => {
    const requestData = {
      password: password || '', username: username || '',
    }
    const result = await dispatch(fetchSignIn(requestData))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
    }
  }, [onSuccess, password, username, dispatch])
  const btnDisabled = useMemo(() => isLoading || !username || !password, [isLoading, password, username])
  return (
    <DynamicReducerLoader reducers={initialReducers}>
      <div className={cls(s.SignInForm, {}, [className])}>
        <h4>
          {t('Sign in')}
          :
        </h4>
        {error && <Text text={error} theme="error" />}
        <Input
          placeholder="Enter username..."
          value={username}
          onChange={onChangeUsername}
          testId="Signin.Username.Input"
        />
        <Input
          placeholder="Enter password..."
          value={password}
          onChange={onChangePassword}
          testId="Signin.Password.Input"
        />
        <Button theme="bordered" onClick={onSignIn} disabled={btnDisabled}>{t('Apply')}</Button>
      </div>
    </DynamicReducerLoader>
  )
})

export default SignInForm
