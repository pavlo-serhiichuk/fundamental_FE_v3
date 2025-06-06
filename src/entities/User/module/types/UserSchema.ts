import { UserRoles } from '../consts/consts'
import { FeatureFlags } from '@/shared/types/featureFlags'

export interface User {
  id?: string
  username?: string
  password?: string
  roles?: UserRoles[]
  avatar?: string
  features?: FeatureFlags
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
