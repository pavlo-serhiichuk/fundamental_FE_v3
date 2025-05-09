import {useTranslation} from 'react-i18next'
import {cls} from '@/shared/lib/cls/cls'
import {Text} from '@/shared/ui/Text/Text'
import {AppLink} from '@/shared/ui/AppLink/AppLink'
import {Notification} from '../../module/types/notification'
import * as s from './NotificationsItem.module.scss'

interface NotificationsItemProps {
  className?: string
  notification: Notification
}

export const NotificationsItem = (props: NotificationsItemProps) => {
  const {className, notification} = props
  const {t} = useTranslation()
  return (
    <div className={cls(s.NotificationsItem, {}, [className])}>
      {t('')}
      <Text title={notification.title} size="text_size_s" text={notification.description} />
      {notification.internalHref && <AppLink to={notification.internalHref} className={s.visit}>Visit</AppLink>}
    </div>
  )
}
