import { rtkApi } from '@/shared/api/rtkApi'
import { Notification } from '../module/types/notification'

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchNotifications: build.query<Notification[], string>({
      query: (userId) => ({
        url: `/notifications?userId=${userId}`,
      }),
    }),
  }),
})
export const useFetchNotifications = notificationsApi.useFetchNotificationsQuery
