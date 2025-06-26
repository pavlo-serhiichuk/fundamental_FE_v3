import { type FC } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { type ArticleCodeBlock } from '@/entities/Article'
import * as s from './ArticleEditCodeComponent.module.scss'
import { Card } from '@/shared/ui/V2/Card'
import { Icon } from '@/shared/ui/V2/Icon'
import CloseIcon from '@/shared/assets/icons/closeCircle.svg'
import { getVStackString, HStack } from '@/shared/ui/stationary/Stack'

interface ArticleBlockCodeComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleEditCodeComponent: FC<ArticleBlockCodeComponentProps> = (
  props,
) => {
  const { className, block } = props

  return (
    <Card
      bgType="secondary"
      padding="20"
      className={getVStackString({ gap: '16' })}
    >
      <HStack justify="end">
        <Icon Svg={CloseIcon} width={25} height={25} />
      </HStack>
      <textarea
        value={block.code}
        className={cls(s.ArticleBlockCodeComponent, {}, [className])}
        rows={Math.floor(block.code.length / 24)}
      />
    </Card>
  )
}
