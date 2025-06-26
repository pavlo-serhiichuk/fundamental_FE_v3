import { memo } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { Text } from '@/shared/ui/deprecated/Text'
import { type ArticleImageBlock } from '@/entities/Article'
import * as s from './ArticleEditImageComponent.module.scss'
import { Input } from '@/shared/ui/V2/Input'
import { HStack, VStack } from '@/shared/ui/stationary/Stack'
import { Card } from '@/shared/ui/V2/Card'
import { Icon } from '@/shared/ui/V2/Icon'
import CloseIcon from '@/shared/assets/icons/closeCircle.svg'
import { AppImage } from '@/shared/ui/stationary/AppImage'

interface ArticleBlockImageComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleEditImageComponent = memo(
  (props: ArticleBlockImageComponentProps) => {
    const { className, block } = props

    return (
      <Card bgType="secondary" padding="20">
        <VStack className={cls('', {}, [className])} gap="10" justify="center">
          <HStack justify="end">
            <Icon Svg={CloseIcon} width={25} height={25} />
          </HStack>
          <AppImage src={block.src} alt={block.title} className={s.image} />
          <Input label="Add path" value={block.src} />
          <Input label="Add name" value={block.title} />
        </VStack>
      </Card>
    )
  },
)
