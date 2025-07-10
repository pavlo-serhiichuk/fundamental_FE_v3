import { memo } from 'react'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/cls/cls'
import { NotificationsItem } from '../NotificationsItem/NotificationsItem'
import { getUserAuthData } from '@/entities/User'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { useFetchNotifications } from '../../api/notificationsApi'
import { Notification } from '../../module/types/notification'
import { ToggleFeature } from '@/shared/lib/features/components/ToggleFeature/ToggleFeature'
import { Skeleton } from '@/shared/ui/V2/Skeleton'

interface NotificationsListProps {
  className?: string
}

export const NotificationsList = memo((props: NotificationsListProps) => {
  const { className } = props
  const userId = useSelector(getUserAuthData)?.id
  const {
    data: notifications,
    isLoading,
    error,
  } = useFetchNotifications(userId ?? '0', {
    pollingInterval: 5000,
  })

  if (isLoading || error) {
    return (
      <ToggleFeature
        feature="isV2"
        on={
          <div className={cls('', {}, [className])}>
            <Skeleton width="100%" height={40} marginTop={5} />
            <Skeleton width="100%" height={40} marginTop={5} />
            <Skeleton width="100%" height={40} marginTop={5} />
          </div>
        }
        off={
          <div className={cls('', {}, [className])}>
            <SkeletonDeprecated width="100%" height={40} marginTop={5} />
            <SkeletonDeprecated width="100%" height={40} marginTop={5} />
            <SkeletonDeprecated width="100%" height={40} marginTop={5} />
          </div>
        }
      />
    )
  }

  return (
    <div className={cls('', {}, [className])}>
      {notifications?.map((notification: Notification) => (
        <NotificationsItem notification={notification} key={notification.id} />
      ))}
    </div>
  )
})
