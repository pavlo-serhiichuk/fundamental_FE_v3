import { ChangeEvent, type FC, useCallback } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { type ArticleCodeBlock } from '../../module/types/article'
import * as s from './ArticleEditCodeComponent.module.scss'
import { Card } from '@/shared/ui/V2/Card'
import { getVStackString } from '@/shared/ui/stationary/Stack'
import { editArticleActions } from '../../module/slice/editArticleSlice'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { createArticleActions } from '../../module/slice/createArticleSlice'

interface ArticleBlockCodeComponentProps {
  className?: string
  block: ArticleCodeBlock
  isCreate?: boolean
}

export const ArticleEditCodeComponent: FC<ArticleBlockCodeComponentProps> = (
  props,
) => {
  const { className, block, isCreate } = props
  const dispatch = useAppDispatch()
  const { setCode, deleteBlock } = isCreate
    ? createArticleActions
    : editArticleActions

  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      setCode({
        blockId: block.id,
        code: e.target.value,
      }),
    )
  }, [])

  const onDeleteBlock = () => {
    if (block?.id) {
      dispatch(deleteBlock(block.id))
    }
  }

  return (
    <Card
      bgType="secondary"
      padding="20"
      className={getVStackString({ gap: '16' })}
      onClose={onDeleteBlock}
      withCloseIcon
    >
      <textarea
        value={block.code}
        className={cls(s.ArticleBlockCodeComponent, {}, [className])}
        rows={Math.floor(block.code.length / 24)}
        onChange={onChange}
      />
    </Card>
  )
}
