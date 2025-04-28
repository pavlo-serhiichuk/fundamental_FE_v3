import axios from 'axios'
import {AUTH_USER_DATA} from 'shared/const/localStorage'

export const $api = axios.create({
  baseURL: __API__, // Use the correct base URL
  headers: {
    authorization: localStorage.getItem(AUTH_USER_DATA) || '',
  },
  withCredentials: true, // Enable this if you're sending cookies or other credentials
})
