import { useCallback, useEffect, useState } from 'react'
import { HStack, VStack } from '@/shared/ui/stationary/Stack'
import { cls } from '@/shared/lib/cls/cls'
import { RatingInfo } from '@/entities/Rating'
import { Text } from '@/shared/ui/V2/Text'
import { StarRating } from '@/shared/ui/V2/StarRating'
import { Card } from '@/shared/ui/V2/Card'
import { Modal } from '@/shared/ui/V2/Modal'
import { Input } from '@/shared/ui/V2/Input'
import { Button } from '@/shared/ui/V2/Button'
import { useDevice } from '@/shared/hooks/useDevice'
import { Drawer } from '@/shared/ui/V2/Drawer'
import * as s from './RatingCard.module.scss'

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

  const onSelect = useCallback(
    (starsCount: number) => {
      if (!ratingInfo) {
        setStarsCount(starsCount)
        setIsModalOpen(true)
      }
    },
    [ratingInfo],
  )

  const onChangeFeedbackMessage = (feedback: string) => {
    setFeedbackMessage(feedback)
  }

  const handleAccept = useCallback(() => {
    if (!ratingInfo && feedbackMessage && onAccept) {
      onAccept(starsCount, feedbackMessage)
      setIsModalOpen(false)
    }
  }, [feedbackMessage, starsCount, ratingInfo, onAccept])

  const handleCancel = useCallback(() => {
    if (!ratingInfo && onCancel) {
      onCancel(starsCount)
      setIsModalOpen(false)
    }
  }, [onCancel, starsCount, ratingInfo])

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedbackMessage}
        onChange={onChangeFeedbackMessage}
        testId="RatingCard.Input"
      />
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
          <VStack gap="10" data-testid="RatingCard">
            {modalContent}
            <VStack justify="end" gap="10" align="end">
              <Button fullWidth onClick={handleAccept}>
                Send
              </Button>
              <Button fullWidth onClick={handleCancel} theme="cancel">
                Cancel
              </Button>
            </VStack>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <VStack gap="10" data-testid="RatingCard">
            {modalContent}
            <HStack justify="end" gap="10">
              <Button onClick={handleCancel} theme="cancel">
                Cancel
              </Button>
              <Button onClick={handleAccept} testId="RatingCard.SendButton">
                Send
              </Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  )
}
