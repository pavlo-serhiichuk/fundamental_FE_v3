import {useCallback, useEffect, useState} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import * as s from './RatingCard.module.scss'
import {RatingInfo} from '@/entities/Rating'
import {Text} from '@/shared/ui/Text/Text'
import {StarRating} from '@/shared/ui/StarRating'
import {Card} from '@/shared/ui/Card/Card'
import {HStack, VStack} from '@/shared/ui/Stack'
import {Modal} from '@/shared/ui/Modal'
import {Input} from '@/shared/ui/Input/Input'
import {Button} from '@/shared/ui/Button/Button'
import {useDevice} from '@/shared/hooks/useDevice'
import {Drawer} from '@/shared/ui/Drawer'

interface RatingCardProps {
  className?: string
  title: string
  ratingInfo?: RatingInfo
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedbackMessage?: string) => void
  feedbackTitle?: string
}

export const RatingCard = (props: RatingCardProps) => {
  const {
    className,
    title,
    ratingInfo,
    feedbackTitle = 'Leave your feedback:',
    onAccept,
    onCancel,
  } = props

  const [starsCount, setStarsCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState<string>('')
  const isMobile = useDevice()

  useEffect(() => {
    if (ratingInfo) {
      setStarsCount(ratingInfo.rate)
    }
  }, [ratingInfo])

  const onSelect = useCallback((starsCount: number) => {
    if (!ratingInfo) {
      setStarsCount(starsCount)
      setIsModalOpen(true)
    }
  }, [])

  const onChangeFeedbackMessage = (feedback: string) => {
    setFeedbackMessage(feedback)
  }

  const handleAccept = useCallback(() => {
    if (!ratingInfo && feedbackMessage && onAccept) {
      onAccept(starsCount, feedbackMessage)
      setIsModalOpen(false)
    }
  }, [feedbackMessage, starsCount, ratingInfo])

  const handleCancel = useCallback(() => {
    if (!ratingInfo && onCancel) {
      onCancel(starsCount)
      setIsModalOpen(false)
    }
  }, [starsCount, ratingInfo])

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedbackMessage} onChange={onChangeFeedbackMessage} />
    </>
  )

  return (
    <Card className={cls(s.RatingCard, {}, [className])}>
      <VStack align="center" gap="10">
        <Text title={title} />
        <StarRating selectedStars={starsCount} onSelect={onSelect} />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <VStack gap="10">
            {modalContent}
            <VStack justify="end" gap="10" align="end">
              <Button fullWidth onClick={handleAccept}>Send</Button>
              <Button fullWidth onClick={handleCancel} theme="cancel">Cancel</Button>
            </VStack>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <VStack gap="10">
            {modalContent}
            <HStack justify="end" gap="10">
              <Button onClick={handleCancel} theme="cancel">Cancel</Button>
              <Button onClick={handleAccept}>Send</Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  )
}
