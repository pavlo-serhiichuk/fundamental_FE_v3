import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/Button/Button'
import {Icon} from 'shared/ui/Icon/Icon'
import NotificationsIcon from 'shared/assets/icons/notifications.svg'
import {Popover} from 'shared/ui/Popups'
import {NotificationsList} from 'entities/Notification'
import * as s from './NotificationsButton.module.scss'

interface NotificationsButtonProps {
  className?: string
}

export const NotificationsButton = (props: NotificationsButtonProps) => {
  const {className} = props
  const {t} = useTranslation()
  return (
    <Popover
      className={cls(s.NotificationsButton, {}, [className])}
      direction="bottom left"
      trigger={(
        <Button theme="clear">
          <Icon Svg={NotificationsIcon} />
        </Button>
      )}
    >
      <NotificationsList className={s.notifList} />
    </Popover>
  )
}
