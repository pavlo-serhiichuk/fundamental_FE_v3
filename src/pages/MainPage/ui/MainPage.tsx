import React from 'react'
import {useTranslation} from 'react-i18next'
import {Page} from '@/widgets/Page/Page'
import * as s from './MainPage.module.scss'
import {StarRating} from '@/shared/ui/StarRating'

const MainPage = () => {
  const {t} = useTranslation('main')
  return (
    <Page className={s.MainPage}>
      <div>{t('Main page')}</div>
      {/* <Counter /> */}
      <StarRating />
    </Page>
  )
}

export default MainPage
