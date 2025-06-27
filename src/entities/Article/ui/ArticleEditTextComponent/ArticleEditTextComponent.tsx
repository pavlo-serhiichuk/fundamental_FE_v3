import { ChangeEvent, memo, useCallback } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleEditTextComponent.module.scss'
import { ArticleTextBlock } from '../../module/types/article'
import { Input } from '@/shared/ui/V2/Input'
import { VStack, getVStackString } from '@/shared/ui/stationary/Stack'
import { Card } from '@/shared/ui/V2/Card'
import { Button } from '@/shared/ui/V2/Button'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { editArticleActions } from '../../module/slice/editArticleSlice'

interface ArticleEditComponentProps {
  className?: string
  block?: ArticleTextBlock
}

export const ArticleEditTextComponent = memo(
  (props: ArticleEditComponentProps) => {
    const { className, block } = props
    const dispatch = useAppDispatch()
    // console.log('rerender')

    const onChangeBlockTitle = useCallback(
      (value: string) => {
        dispatch(
          editArticleActions.changeTextBlockTitle({
            blockId: block?.id,
            title: value,
          }),
        )
      },
      [dispatch],
    )

    const onChangeBlockParagraph = useCallback(
      (paragraphId: number) => (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(
          editArticleActions.changeTextBlockParagraph({
            blockId: block?.id,
            paragraphValue: e.target.value,
            paragraphId,
          }),
        )
      },
      [dispatch],
    )

    const onDeleteBlock = () => {
      if (block?.id) {
        dispatch(editArticleActions.deleteBlock(block.id))
      }
    }

    const onAddParagraph = () => {
      if (block?.id && block?.type) {
        dispatch(
          editArticleActions.addParagraph({
            blockId: block.id,
            blockType: block.type,
          }),
        )
      }
    }

    return (
      <Card
        bgType="secondary"
        padding="16"
        className={getVStackString({ gap: '16' })}
        onClose={onDeleteBlock}
        withCloseIcon
      >
        <VStack className={cls('', {}, [className])} gap="10">
          <Input
            value={block?.title}
            label="Block title"
            onChange={onChangeBlockTitle}
          />
          {block?.paragraphs.map((paragraph, index) => (
            <textarea
              key={index}
              value={paragraph}
              rows={Math.floor(paragraph.length / 30)}
              onChange={onChangeBlockParagraph(index)}
            />
          ))}
        </VStack>
        <Button
          theme="accept"
          className={s.addParagraphBtn}
          onClick={onAddParagraph}
        >
          + Add paragraph
        </Button>
      </Card>
    )
  },
)
