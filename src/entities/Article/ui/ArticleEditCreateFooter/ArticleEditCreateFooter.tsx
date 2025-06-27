import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleEditCreateFooter.module.scss'
import { Button } from '@/shared/ui/V2/Button'
import { HStack } from '@/shared/ui/stationary/Stack'

interface ArticleEditCreateFooterProps {
  className?: string
  onOpenPreview?: () => void
  onSave?: () => void
  isCreate?: boolean
}

export const ArticleEditCreateFooter = (
  props: ArticleEditCreateFooterProps,
) => {
  const { className, onOpenPreview, onSave } = props
  const { t } = useTranslation()
  return (
    <div>
      <HStack
        gap="16"
        className={cls(s.ArticleEditCreateFooter, {}, [className])}
      >
        <Button theme="cancel" fullWidth>
          {t('Cancel')}
        </Button>
        <Button theme="cancel" fullWidth>
          {t('Reset')}
        </Button>
        <Button theme="accept" fullWidth onClick={onOpenPreview}>
          {t('Preview')}
        </Button>
        <Button theme="accept" fullWidth onClick={onSave}>
          {t('Edit')}
        </Button>
      </HStack>
    </div>
  )
}
