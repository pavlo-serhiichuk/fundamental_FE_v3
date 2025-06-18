import { useState } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { Button as ButtonDepricated } from '@/shared/ui/deprecated/Button'
import { Icon as IconDepricated } from '@/shared/ui/deprecated/Icon'
import NotificationsIconDeprecated from '@/shared/assets/icons/notifications.svg'
import NotificationsIcon from '@/shared/assets/icons/notifications2.svg'
import { Popover as PopoverDepricated } from '@/shared/ui/deprecated/Popups'
import { NotificationsList } from '@/entities/Notification'
import { useDevice } from '@/shared/hooks/useDevice'
import { Drawer as DrawerDepricated } from '@/shared/ui/deprecated/Drawer'
import * as s from './NotificationsButton.module.scss'
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature'
import { Icon } from '@/shared/ui/V2/Icon'
import { Drawer } from '@/shared/ui/V2/Drawer'
import { Popover } from '@/shared/ui/V2/Popups'

interface NotificationsButtonProps {
  className?: string
}

export const NotificationsButton = (props: NotificationsButtonProps) => {
  const { className } = props
  const isMobile = useDevice()
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const Trigger = () => (
    <ToggleFeature
      feature="isV2"
      on={
        <Icon Svg={NotificationsIcon} onClick={onOpen} height={38} width={38} />
      }
      off={
        <ButtonDepricated theme="clear" onClick={onOpen}>
          <IconDepricated Svg={NotificationsIconDeprecated} />
        </ButtonDepricated>
      }
    />
  )

  if (isMobile) {
    return (
      <div className={cls('', {}, [className])}>
        <Trigger />
        <ToggleFeature
          feature="isV2"
          on={
            <Drawer isOpen={isOpen} onClose={onClose}>
              <NotificationsList />
            </Drawer>
          }
          off={
            <DrawerDepricated isOpen={isOpen} onClose={onClose}>
              <NotificationsList />
            </DrawerDepricated>
          }
        />
      </div>
    )
  }

  return (
    <ToggleFeature
      feature="isV2"
      on={
        <Popover
          className={cls('', {}, [className])}
          direction="bottom left"
          trigger={<Trigger />}
        >
          <NotificationsList className={s.notifList} />
        </Popover>
      }
      off={
        <PopoverDepricated
          className={cls('', {}, [className])}
          direction="bottom left"
          trigger={<Trigger />}
        >
          <NotificationsList className={s.notifList} />
        </PopoverDepricated>
      }
    />
  )
}
