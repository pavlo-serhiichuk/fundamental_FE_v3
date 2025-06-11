import { useTranslation } from 'react-i18next'
import { memo, useEffect, useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { saveJsonSettings, useGetJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { Button } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { useDevice } from '@/shared/hooks/useDevice'
import { Drawer } from '@/shared/ui/Drawer'

export const ArticlesPageGreeting = memo(() => {
  const { t } = useTranslation()
  const { articlesPageHasBeenOpened } = useGetJsonSettings()
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const isMobile = useDevice()
  useEffect(() => {
    if (!articlesPageHasBeenOpened) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ articlesPageHasBeenOpened: true }))
    }
  }, [dispatch, articlesPageHasBeenOpened])

  const onClose = () => setIsOpen(false)

  const content = <>{t('We are happy to introduce you Articles page!')}</>

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose}>
        {content}
        <br />
        <br />
        <Button fullWidth onClick={onClose}>
          OK
        </Button>
      </Drawer>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {content}
      <br />
      <br />
      <HStack justify="end">
        <Button onClick={onClose}>OK</Button>
      </HStack>
    </Modal>
  )
})
