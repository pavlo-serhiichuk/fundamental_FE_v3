import { UserRoles } from '../consts/consts'
import { FeatureFlags } from '@/shared/types/featureFlags'
import { JsonSettings } from '@/shared/types/jsonSettings'

export interface User {
  id?: string
  username?: string
  password?: string
  roles?: UserRoles[]
  avatar?: string
  features?: FeatureFlags
  jsonSettings?: JsonSettings
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
