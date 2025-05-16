import React from 'react'
import {useTranslation} from 'react-i18next'
import {Page} from '@/widgets/Page'
import * as s from './MainPage.module.scss'
import {Counter} from '@/entities/Counter'

const MainPage = () => {
  const {t} = useTranslation('main')
  return (
    <Page className={s.MainPage} data-testid="MainPage">
      <div>{t('Main page')}</div>
      {/* <Counter /> */}
    </Page>
  )
}

export default MainPage
