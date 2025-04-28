import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {Button} from 'shared/ui/Button/Button'
import {useSelector} from 'react-redux'
import {
  getSignInError,
  getSignInIsLoading,
  getSignInPassword,
  getSignInUsername,
} from 'features/SignIn/module/selectors/getSignInSelectors'
import {signInActions, signInReducer} from 'features/SignIn/module/slice/signInSlice'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {fetchSignIn} from 'features/SignIn/module/thunks/fetchSignIn'
import {memo, useCallback, useMemo} from 'react'
import {Text} from 'shared/ui/Text/Text'
import DynamicReducerLoader, {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import * as s from './SignInForm.module.scss'

export interface SignInFormProps {
    className?: string
    onSuccess: () => void
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
      onSuccess()
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
        <Input placeholder="Enter username..." value={username} onChange={onChangeUsername} />
        <Input placeholder="Enter password..." value={password} onChange={onChangePassword} />
        <Button theme="bordered" onClick={onSignIn} disabled={btnDisabled}>{t('Apply')}</Button>
      </div>
    </DynamicReducerLoader>
  )
})

export default SignInForm
