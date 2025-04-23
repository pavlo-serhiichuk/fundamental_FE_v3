import React from 'react'
import {useTranslation} from 'react-i18next'
import {Page} from 'shared/ui/Page/Page'
import * as s from './MainPage.module.scss'

const MainPage = () => {
  const {t} = useTranslation('main')
  return (
    <Page className={s.MainPage}>
      <div>{t('Main page')}</div>
      {/* <Counter /> */}
    </Page>
  )
}

export default MainPage
