import { type FC } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { useTranslation } from 'react-i18next'
import * as s from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return <div className={cls(s.Loader, {}, [className])}>{t('Loading')}</div>
}
