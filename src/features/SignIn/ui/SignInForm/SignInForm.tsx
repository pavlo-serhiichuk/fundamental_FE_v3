import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { memo, useCallback, useMemo } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import {
  getSignInError,
  getSignInIsLoading,
  getSignInPassword,
  getSignInUsername,
} from '../../module/selectors/getSignInSelectors'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/V2/Text'
import DynamicReducerLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import * as s from './SignInForm.module.scss'
import { signInReducer, signInActions } from '../../module/slice/signInSlice'
import { fetchSignIn } from '../../module/thunks/fetchSignIn'
import { ToggleFeature } from '@/shared/lib/features'
import { Input } from '@/shared/ui/V2/Input'
import { Button } from '@/shared/ui/V2/Button'
import { HStack } from '@/shared/ui/stationary/Stack'

export interface SignInFormProps {
  className?: string
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  signIn: signInReducer,
}

const SignInForm = memo((props: SignInFormProps) => {
  const { className, onSuccess } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const username = useSelector(getSignInUsername)
  const password = useSelector(getSignInPassword)
  const isLoading = useSelector(getSignInIsLoading)
  const error = useSelector(getSignInError)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(signInActions.setUsername(value))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(signInActions.setPassword(value))
    },
    [dispatch],
  )

  const onSignIn = useCallback(async () => {
    const requestData = {
      password: password || '',
      username: username || '',
    }
    const result = await dispatch(fetchSignIn(requestData))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
    }
  }, [onSuccess, password, username, dispatch])
  const btnDisabled = useMemo(
    () => isLoading || !username || !password,
    [isLoading, password, username],
  )
  return (
    <DynamicReducerLoader reducers={initialReducers}>
      <ToggleFeature
        feature="isV2"
        on={
          <div className={cls(s.SignInForm, {}, [className])}>
            <Text title={`${t('Sign in')}:`} />
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
            <HStack justify="end" gap="16">
              <Button theme="cancel" onClick={onSignIn} disabled={btnDisabled}>
                {t('Cancel')}
              </Button>
              <Button theme="accept" onClick={onSignIn} disabled={btnDisabled}>
                {t('Apply')}
              </Button>
            </HStack>
          </div>
        }
        off={
          <div className={cls(s.SignInForm, {}, [className])}>
            <h4>{t('Sign in')}:</h4>
            {error && <TextDeprecated text={error} theme="error" />}
            <InputDeprecated
              placeholder="Enter username..."
              value={username}
              onChange={onChangeUsername}
              testId="Signin.Username.Input"
            />
            <InputDeprecated
              placeholder="Enter password..."
              value={password}
              onChange={onChangePassword}
              testId="Signin.Password.Input"
            />
            <ButtonDeprecated
              theme="bordered"
              onClick={onSignIn}
              disabled={btnDisabled}
            >
              {t('Apply')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicReducerLoader>
  )
})

export default SignInForm
