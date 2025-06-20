import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/cls/cls'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { ToggleFeature } from '@/shared/lib/features/components/ToggleFeature/ToggleFeature'
import { AppLink } from '@/shared/ui/V2/AppLink'
import { Text } from '@/shared/ui/V2/Text'
import { Notification } from '../../module/types/notification'
import * as s from './NotificationsItem.module.scss'

interface NotificationsItemProps {
  className?: string
  notification: Notification
}

export const NotificationsItem = (props: NotificationsItemProps) => {
  const { className, notification } = props
  const { t } = useTranslation()
  return (
    <ToggleFeature
      feature="isV2"
      on={
        <div className={cls(s.NotificationsItem, {}, [className])}>
          {t('')}
          <Text
            title={notification.title}
            size="text_size_s"
            text={notification.description}
          />
          {notification.internalHref && (
            <AppLink to={notification.internalHref} className={s.visit}>
              Visit
            </AppLink>
          )}
        </div>
      }
      off={
        <div className={cls(s.NotificationsItemDeprecated, {}, [className])}>
          {t('')}
          <TextDeprecated
            title={notification.title}
            size="text_size_s"
            text={notification.description}
          />
          {notification.internalHref && (
            <AppLinkDeprecated
              to={notification.internalHref}
              className={s.visit}
            >
              Visit
            </AppLinkDeprecated>
          )}
        </div>
      }
    />
  )
}
