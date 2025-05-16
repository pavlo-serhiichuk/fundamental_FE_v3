import {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {cls} from '@/shared/lib/cls/cls'
import {Button} from '@/shared/ui/Button'
import {Page} from '@/widgets/Page'
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
    <Page className={cls(s.NotFoundPage, {}, [className])} data-testid="NotFoundPage">
      {t('Page is not found')}
      <Button className={s.goBack} onClick={goBack}>{t('Go back')}</Button>
    </Page>
  )
}
