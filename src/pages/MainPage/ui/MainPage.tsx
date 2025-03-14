import React from 'react';
import {useTranslation} from 'react-i18next'
import * as s from './MainPage.module.scss'

const MainPage = () => {
  const {t} = useTranslation('main')
  return (
    <div className={s.MainPage}>
      <div>{t('Main page')}</div>
    </div>
  );
};

export default MainPage;
