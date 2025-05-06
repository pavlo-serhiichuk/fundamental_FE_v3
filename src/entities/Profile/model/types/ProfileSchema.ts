import {type Country} from 'entities/Country/model/Country'
import {type Currency} from 'entities/Currency'
import {ValidationError} from '../consts/consts'

export interface Profile {
  id?: string
  firstname?: string
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
