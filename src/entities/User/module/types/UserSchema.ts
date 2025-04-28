type UserRole = 'ADMIN' | 'USER'

export interface User {
    id?: string;
    username?: string;
    password?: string;
    role?: UserRole
    avatar?: string
}

export interface UserSchema {
    authData?: User;
    _inited: boolean
}
