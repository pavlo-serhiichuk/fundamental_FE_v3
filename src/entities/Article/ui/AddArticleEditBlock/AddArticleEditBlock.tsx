import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './AddArticleEditBlock.module.scss'
import { HStack } from '@/shared/ui/stationary/Stack'
import { Button } from '@/shared/ui/V2/Button'
import { ArticleBlockType } from '../../module/consts/consts'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { editArticleActions } from '../../module/slice/editArticleSlice'
import { createArticleActions } from '../../module/slice/createArticleSlice'

interface AddArticleEditBlockProps {
  className?: string
  blockIndex: number
  isLastBlock?: boolean
  isCreate?: boolean
}

export const AddArticleEditBlock = (props: AddArticleEditBlockProps) => {
  const { className, blockIndex, isLastBlock = false, isCreate = false } = props
  const { t } = useTranslation()
  const [isAddArticleEditBlock, setIsAddArticleEditBlock] = useState(false)
  const dispatch = useAppDispatch()
  const { addBlock } = isCreate ? createArticleActions : editArticleActions
  const onToggle = () => {
    setIsAddArticleEditBlock(!isAddArticleEditBlock)
  }

  const onAddBlock = useCallback(
    (type: ArticleBlockType) => () => {
      if (isCreate) {
        dispatch(
          addBlock({
            blockType: type,
            blockIndex,
            isLastBlock,
          }),
        )
      } else {
        dispatch(
          addBlock({
            blockType: type,
            blockIndex,
            isLastBlock,
          }),
        )
      }
      setIsAddArticleEditBlock(false)
    },
    [dispatch],
  )

  return (
    <HStack
      className={cls(s.AddArticleEditBlock, {}, [className])}
      justify="center"
      gap="10"
    >
      {isAddArticleEditBlock ? (
        <>
          <Button theme="cancel" onClick={onToggle}>
            {t('Cancel')}
          </Button>
          <Button theme="accept" onClick={onAddBlock(ArticleBlockType.TEXT)}>
            + {t('text')}
          </Button>
          <Button theme="accept" onClick={onAddBlock(ArticleBlockType.CODE)}>
            + {t('code')}
          </Button>
          <Button theme="accept" onClick={onAddBlock(ArticleBlockType.IMAGE)}>
            + {t('image')}
          </Button>
        </>
      ) : (
        <Button onClick={onToggle} theme="accept">
          + {t('Add block')}
        </Button>
      )}
    </HStack>
  )
}
