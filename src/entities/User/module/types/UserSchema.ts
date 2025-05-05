export enum UserRoles {
    USER = 'USER',
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
}

export interface User {
    id?: string;
    username?: string;
    password?: string;
    roles?: UserRoles[]
    avatar?: string
}

export interface UserSchema {
    authData?: User;
    _inited: boolean
}
