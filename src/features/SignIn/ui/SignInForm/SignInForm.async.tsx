import {FC, lazy} from 'react'
import {SignInFormProps} from 'features/SignIn/ui/SignInForm/SignInForm'

export const SignInFormAsync = lazy<FC<SignInFormProps>>(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./SignInForm')), 1000)
}))
