import {type Country} from 'entities/Country/model/Country'
import {type Currency} from 'entities/Currency'

export enum ValidationError {
  SERVER_ERROR = 'SERVER_ERROR',
  FIRSTNAME_ERROR = 'FIRSTNAME_ERROR',
  LASTNAME_ERROR = 'LASTNAME_ERROR',
  AGE_ERROR = 'AGE_ERROR',
  AVATAR_ERROR = 'AVATAR_ERROR'
}

export interface Profile {
  id?: string
  name?: string
  lastname?: string
  age?: number
  city?: string
  country?: Country
  currency?: Currency
  username?: string
  avatar?: string
  status?: string
}
export interface ProfileSchema {
  form?: Profile
  data?: Profile
  isLoading?: boolean
  error?: undefined | string
  readonly?: boolean
  isUpdating?: boolean
  updateError?: undefined | string
  validationErrors?: ValidationError[]
}
