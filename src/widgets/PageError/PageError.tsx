import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/cls/cls'
import { Button } from '@/shared/ui/deprecated/Button'
import * as s from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { t } = useTranslation()
  const { className } = props

  const onReload = () => {
    location.reload()
  }

  return (
    <div className={cls(s.PageError, {}, [className])}>
      <h1>{t('Something went wrong')}</h1> <br />
      <Button theme="bordered" onClick={onReload}>
        {t('Reload')}
      </Button>
    </div>
  )
}
