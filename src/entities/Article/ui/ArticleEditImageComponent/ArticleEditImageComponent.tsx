import { memo, useCallback } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { type ArticleImageBlock } from '../../module/types/article'
import * as s from './ArticleEditImageComponent.module.scss'
import { Input } from '@/shared/ui/V2/Input'
import { VStack } from '@/shared/ui/stationary/Stack'
import { Card } from '@/shared/ui/V2/Card'
import { AppImage } from '@/shared/ui/stationary/AppImage'
import { editArticleActions } from '../../module/slice/editArticleSlice'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'

interface ArticleBlockImageComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleEditImageComponent = memo(
  (props: ArticleBlockImageComponentProps) => {
    const { className, block } = props
    const dispatch = useAppDispatch()

    const onChangeSrc = (value: string) => {
      dispatch(
        editArticleActions.editImageSource({
          blockId: block.id,
          src: value,
        }),
      )
    }

    const onChangeName = useCallback((value: string) => {
      dispatch(
        editArticleActions.editImageSource({
          blockId: block.id,
          title: value,
        }),
      )
    }, [])

    const onDeleteBlock = () => {
      if (block?.id) {
        dispatch(editArticleActions.deleteBlock(block.id))
      }
    }

    return (
      <Card
        bgType="secondary"
        padding="20"
        withCloseIcon
        onClose={onDeleteBlock}
      >
        <VStack className={cls('', {}, [className])} gap="10" justify="center">
          <AppImage src={block.src} alt={block.title} className={s.image} />
          <Input label="Add path" value={block.src} onChange={onChangeSrc} />
          <Input label="Add name" value={block.title} onChange={onChangeName} />
        </VStack>
      </Card>
    )
  },
)
