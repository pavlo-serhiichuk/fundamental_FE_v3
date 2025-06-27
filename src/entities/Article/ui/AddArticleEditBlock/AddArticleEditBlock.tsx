import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './AddArticleEditBlock.module.scss'
import { HStack } from '@/shared/ui/stationary/Stack'
import { Button } from '@/shared/ui/V2/Button'
import { ArticleBlockType } from '../../module/consts/consts'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { editArticleActions } from '../../module/slice/editArticleSlice'

interface AddArticleEditBlockProps {
  className?: string
  blockId?: string
  blockIndex: number
}

export const AddArticleEditBlock = (props: AddArticleEditBlockProps) => {
  const { className, blockId, blockIndex } = props
  const { t } = useTranslation()
  const [isAddArticleEditBlock, setIsAddArticleEditBlock] = useState(false)
  const dispatch = useAppDispatch()

  const onToggle = () => {
    setIsAddArticleEditBlock(!isAddArticleEditBlock)
  }

  const onAddBlock = useCallback(
    (type: ArticleBlockType) => () => {
      dispatch(editArticleActions.addBlock({ blockType: type, blockIndex }))
      setIsAddArticleEditBlock(false)
    },
    [],
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
