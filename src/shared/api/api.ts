import axios from 'axios'
import { USER_ID } from '@/shared/const/localStorage'
// old BE: b4a - https://be1-pavelserhiichuk.b4a.run
// new BE: vercel - https://fundamental-be-v3-n4clh50z6-pashaserhiichukgmailcoms-projects.vercel.app/api
export const $api = axios.create({
  baseURL: __API__, // Use the correct base URL
  withCredentials: true, // Enable this if you're sending cookies or other credentials
})

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_ID) || ''
  }
  return config
})
