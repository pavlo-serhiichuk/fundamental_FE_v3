import {type FC} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/Button/Button'
import {useNavigate} from 'react-router-dom'
import * as s from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const {className} = props
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className={cls(s.NotFoundPage, {}, [className])}>
      {t('Page is not found')}
      <Button className={s.goBack} onClick={goBack}>{t('Go back')}</Button>
    </div>
  )
}
