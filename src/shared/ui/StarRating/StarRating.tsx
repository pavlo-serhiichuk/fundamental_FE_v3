import { useState, memo, useEffect } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import StarRatingIcon from '@/shared/assets/icons/start-rating.svg'
import { Icon } from '../../ui/Icon/Icon'
import * as s from './StarRating.module.scss'

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props
  const [currentStarsCount, setCurrentStarsCount] = useState(0)
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if (selectedStars) {
      setCurrentStarsCount(selectedStars)
      setIsSelected(Boolean(selectedStars))
    }
  }, [selectedStars])

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={cls('', {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          key={starNumber}
          Svg={StarRatingIcon}
          width={size}
          height={size}
          className={cls(s.starIcon, {
            [s.hovered]: currentStarsCount >= starNumber,
            [s.normal]: currentStarsCount <= starNumber,
            [s.selected]: isSelected,
          })}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarsCount >= starNumber}
        />
      ))}
    </div>
  )
})
