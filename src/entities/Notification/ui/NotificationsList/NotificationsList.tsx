import {memo} from 'react'
import {useSelector} from 'react-redux'
import {cls} from '@/shared/lib/cls/cls'
import {NotificationsItem} from '@/entities/Notification/ui/NotificationsItem/NotificationsItem'
import {getUserAuthData} from '@/entities/User'
import {Skeleton} from '@/shared/ui/Skeleton'
import {useFetchNotifications} from '../../api/notificationsApi'
import {Notification} from '../../module/types/notification'
import * as s from './NotificationsList.module.scss'

interface NotificationsListProps {
  className?: string
}

export const NotificationsList = memo((props: NotificationsListProps) => {
  const {className} = props
  const userId = useSelector(getUserAuthData)?.id
  const {data: notifications, isLoading, error} = useFetchNotifications(userId ?? '0', {
    pollingInterval: 5000,
  })

  if (isLoading || error) {
    return (
      <div className={cls(s.NotificationsList, {}, [className])}>
        <Skeleton width="100%" height={40} marginTop={5} />
        <Skeleton width="100%" height={40} marginTop={5} />
        <Skeleton width="100%" height={40} marginTop={5} />
      </div>
    )
  }

  return (
    <div className={cls(s.NotificationsList, {}, [className])}>
      {notifications?.map(
        (notification: Notification) => (
          <NotificationsItem
            notification={notification}
            key={notification.id}
          />
        ),
      )}
    </div>
  )
})
