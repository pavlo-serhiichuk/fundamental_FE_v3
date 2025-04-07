import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {Button} from 'shared/ui/Button/Button'
import {useSelector, useStore} from 'react-redux'
import {
  getSignInError,
  getSignInIsLoading,
  getSignInPassword,
  getSignInUsername,
} from 'features/SignIn/module/selectors/getSignInSelectors'
import {signInActions, signInReducer} from 'features/SignIn/module/slice/signInSlice'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {fetchSignIn} from 'features/SignIn/module/thunks/fetchSignIn'
import {useCallback, useEffect} from 'react'
import {Text} from 'shared/ui/Text/Text'
import {ReduxStoreWithReducerManager} from 'app/providers/StoreProvider'
import * as s from './SignInForm.module.scss'

export interface SignInFormProps {
  className?: string
}

const SignInForm = (props: SignInFormProps) => {
  const {className} = props
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const store = useStore() as ReduxStoreWithReducerManager
  const username = useSelector(getSignInUsername)
  const password = useSelector(getSignInPassword)
  const isLoading = useSelector(getSignInIsLoading)
  const error = useSelector(getSignInError)

  useEffect(() => {
    store.dispatch({type: '@INIT loginForm'})
    store.reducerManager.add('signIn', signInReducer)
    return () => {
      store.dispatch({type: '@DESTROY loginForm'})
      store.reducerManager.remove('signIn')
    }
  }, [])

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

export default SignInForm
