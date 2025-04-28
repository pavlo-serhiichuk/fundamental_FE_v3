export interface SignInSchema {
  username: string
  password: string
  isLoading?: boolean
  error?: undefined | string
}
