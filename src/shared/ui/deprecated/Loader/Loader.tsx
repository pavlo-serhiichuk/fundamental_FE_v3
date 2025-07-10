import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

/**
 * @deprecated, there is new components from V2 folder
 * */

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return <div className={cls(s.Loader, {}, [className])}>{t('Loading')}</div>
}
