import { UserRoles } from '../consts/consts'

export interface User {
  id?: string
  username?: string
  password?: string
  roles?: UserRoles[]
  avatar?: string
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
