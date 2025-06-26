import { useCallback } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleEditTextComponent.module.scss'
import { ArticleTextBlock } from '@/entities/Article'
import { Input } from '@/shared/ui/V2/Input'
import { HStack, VStack, getVStackString } from '@/shared/ui/stationary/Stack'
import { Card } from '@/shared/ui/V2/Card'
import { Button } from '@/shared/ui/V2/Button'
import CloseIcon from '@/shared/assets/icons/closeCircle.svg'
import { Icon } from '@/shared/ui/V2/Icon'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { articleEditPageActions } from '@/pages/ArticleEditPage'

interface ArticleEditComponentProps {
  className?: string
  block?: ArticleTextBlock
}

export const ArticleEditTextComponent = (props: ArticleEditComponentProps) => {
  const { className, block } = props
  const dispatch = useAppDispatch()

  const onChangeBlockTitle = useCallback(() => {
    dispatch(
      articleEditPageActions.changeBlockParagraph({
        blockId: block?.id,
        title: block?.title,
      }),
    )
  }, [dispatch])

  return (
    <Card
      bgType="secondary"
      padding="16"
      className={getVStackString({ gap: '16' })}
    >
      <HStack justify="end">
        <Icon Svg={CloseIcon} width={25} height={25} />
      </HStack>
      <VStack className={cls('', {}, [className])} gap="10">
        <Input
          value={block?.title}
          label="Block title"
          onChange={onChangeBlockTitle}
        />
        {block?.paragraphs.map((paragraph) => (
          <textarea
            value={paragraph}
            rows={Math.floor(paragraph.length / 30)}
          />
        ))}
      </VStack>
      <Button theme="accept" className={s.addParagraphBtn}>
        + Add paragraph
      </Button>
    </Card>
  )
}
