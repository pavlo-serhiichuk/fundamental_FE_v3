import React from 'react';
import {useTranslation} from 'react-i18next'

const MainPage = () => {
  const {t} = useTranslation('main')
  return (
    <div>
      <div>{t('Main page')}</div>
    </div>
  );
};

export default MainPage;
