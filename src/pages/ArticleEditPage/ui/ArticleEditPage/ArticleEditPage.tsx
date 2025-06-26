import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleEditPage.module.scss'
import { Card } from '@/shared/ui/V2/Card'
import { Text } from '@/shared/ui/V2/Text'
import { fetchArticleById, renderEditBlocks } from '@/entities/Article'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import DynamicReducerLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { articleEditPageReducer } from '../../model/slices/articleEditPageSlice'
import { getEditArticleData } from '../../model/selectors/getEditArticleSelectors'
import { HStack, VStack } from '@/shared/ui/stationary/Stack'
import { Input } from '@/shared/ui/V2/Input'
import { Button } from '@/shared/ui/V2/Button'

interface ArticleEditPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleEditPage: articleEditPageReducer,
}

export const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const editArticleData = useSelector(getEditArticleData)
  const { id: articleId } = useParams<{ id: string | undefined }>()
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    if (articleId) {
      dispatch(fetchArticleById(articleId))
    }
  })

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Card className={cls(s.ArticleEditPage, {}, [className])} padding="20">
        <Text title={t('Edit article:')} className={s.pageTitle} />
        <Card bgType="secondary" padding="20">
          <Input value={editArticleData?.title} label="Article title" />
        </Card>
        <VStack gap="16" className={s.blocks}>
          {editArticleData?.blocks?.map(renderEditBlocks)}
        </VStack>
        <HStack gap="16" className={s.confirmBtns}>
          <Button theme="cancel" fullWidth>
            {t('Cancel')}
          </Button>
          <Button theme="accept" fullWidth>
            {t('Accept')}
          </Button>
        </HStack>
      </Card>
    </DynamicReducerLoader>
  )
})
