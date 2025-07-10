import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleEditCreateFooter.module.scss'
import { Button } from '@/shared/ui/V2/Button'
import { HStack } from '@/shared/ui/stationary/Stack'

interface ArticleEditCreateFooterProps {
  className?: string
  onOpenPreview?: () => void
  onSave?: () => void
  onCancel?: () => void
  onDelete?: () => void
  onReset?: () => void
  isCreate?: boolean
}

export const ArticleEditCreateFooter = (
  props: ArticleEditCreateFooterProps,
) => {
  const {
    className,
    onOpenPreview,
    onSave,
    onDelete,
    onCancel,
    onReset,
    isCreate,
  } = props
  const { t } = useTranslation()
  return (
    <div>
      <HStack
        gap="16"
        className={cls(s.ArticleEditCreateFooter, {}, [className])}
        data-testid="ArticleEditCreateFooter"
      >
        {!isCreate && (
          <Button theme="cancel" fullWidth onClick={onDelete}>
            {t('Delete')}
          </Button>
        )}
        <Button theme="cancel" fullWidth onClick={onCancel}>
          {t('Cancel')}
        </Button>
        {!isCreate && (
          <Button theme="cancel" fullWidth onClick={onReset}>
            {t('Reset')}
          </Button>
        )}
        <Button fullWidth onClick={onOpenPreview}>
          {t('Preview')}
        </Button>
        <Button theme="accept" fullWidth onClick={onSave}>
          {t(isCreate ? 'Create' : 'Edit')}
        </Button>
      </HStack>
    </div>
  )
}
