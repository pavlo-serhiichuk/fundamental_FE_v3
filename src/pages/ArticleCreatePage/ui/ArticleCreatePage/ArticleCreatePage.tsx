import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleCreatePage.module.scss'

interface ArticleCreatePageProps {
    className?: string;
}

export const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={cls(s.ArticleCreatePage, {}, [className])}>
           
        </div>
    )
})