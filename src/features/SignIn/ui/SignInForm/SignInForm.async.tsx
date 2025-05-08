import {FC, lazy} from 'react'
import {SignInFormProps} from '@/features/SignIn/ui/SignInForm/SignInForm'

export const SignInFormAsync = lazy<FC<SignInFormProps>>(() => import('./SignInForm'))
