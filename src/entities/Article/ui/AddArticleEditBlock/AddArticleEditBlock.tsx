import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './AddArticleEditBlock.module.scss'
import { HStack } from '@/shared/ui/stationary/Stack'
import { Button } from '@/shared/ui/V2/Button'

interface AddArticleEditBlockProps {
  className?: string
  blockId?: string
}

export const AddArticleEditBlock = (props: AddArticleEditBlockProps) => {
  const { className } = props
  const { t } = useTranslation()
  const [isAddArticleEditBlock, setIsAddArticleEditBlock] = useState(false)

  const onToggle = () => {
    setIsAddArticleEditBlock(!isAddArticleEditBlock)
  }

  return (
    <HStack
      className={cls(s.AddArticleEditBlock, {}, [className])}
      justify="center"
      gap="10"
    >
      {isAddArticleEditBlock ? (
        <>
          <Button theme="cancel" onClick={onToggle}>
            Cancel
          </Button>
          <Button theme="accept">+ text</Button>
          <Button theme="accept">+ code</Button>
          <Button theme="accept">+ image</Button>
        </>
      ) : (
        <Button onClick={onToggle} theme="accept">
          + Add block
        </Button>
      )}
    </HStack>
  )
}
