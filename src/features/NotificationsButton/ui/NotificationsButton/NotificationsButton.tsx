import {useState} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Button} from '@/shared/ui/Button'
import {Icon} from '@/shared/ui/Icon'
import NotificationsIcon from '@/shared/assets/icons/notifications.svg'
import {Popover} from '@/shared/ui/Popups'
import {NotificationsList} from '@/entities/Notification'
import {useDevice} from '@/shared/hooks/useDevice'
import {Drawer} from '@/shared/ui/Drawer'
import {AnimationProvider} from '@/shared/lib/components/AnimationProvider'
import * as s from './NotificationsButton.module.scss'

interface NotificationsButtonProps {
  className?: string
}

export const NotificationsButton = (props: NotificationsButtonProps) => {
  const {className} = props
  const isMobile = useDevice()
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  const trigger = (
    <Button theme="clear" onClick={onOpen}>
      <Icon Svg={NotificationsIcon} />
    </Button>
  )

  if (isMobile) {
    return (
      <div
        className={cls(s.NotificationsButton, {}, [className])}
      >
        {trigger}
        <Drawer isOpen={isOpen} onClose={onClose}>
          <NotificationsList />
        </Drawer>
      </div>
    )
  }

  return (
    <Popover
      className={cls(s.NotificationsButton, {}, [className])}
      direction="bottom left"
      trigger={trigger}
    >
      <NotificationsList className={s.notifList} />
    </Popover>
  )
}
