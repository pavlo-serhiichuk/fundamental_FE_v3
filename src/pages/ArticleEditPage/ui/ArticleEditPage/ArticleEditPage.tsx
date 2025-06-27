import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleEditPage.module.scss'
import { Card } from '@/shared/ui/V2/Card'
import { Text } from '@/shared/ui/V2/Text'
import {
  editArticleActions,
  ArticleEditCreateFooter,
  ArticleEditCreateHeader,
  editArticleById,
  fetchArticleById,
  renderEditBlocks,
  editArticleReducer,
  getEditArticleData,
} from '@/entities/Article'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import DynamicReducerLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { VStack } from '@/shared/ui/stationary/Stack'
import { Modal } from '@/shared/ui/V2/Modal'
import { ArticleDetails } from '@/features/ArticleDetails'
import {
  getRouteArticleDetails,
  getRouteForbidden,
} from '@/shared/const/routers'
import { getUserAuthData } from '@/entities/User'

interface ArticleEditPageProps {
  className?: string
}

const reducers: ReducersList = {
  editArticle: editArticleReducer,
}

export const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const editArticleData = useSelector(getEditArticleData)
  const userId = useSelector(getUserAuthData)?.id
  const navigate = useNavigate()
  const { id: articleId } = useParams<{ id: string | undefined }>()
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useInitialEffect(() => {
    if (articleId) {
      dispatch(fetchArticleById(articleId))
    }
  })

  useInitialEffect(() => {
    if (Boolean(editArticleData) && Boolean(userId)) {
      if (editArticleData?.userId !== userId) {
        navigate(getRouteForbidden())
      }
    }
  }, [editArticleData, userId])

  const onChangeArticleImage = useCallback(
    (value: string) => {
      dispatch(editArticleActions.editArticleImage(value))
    },
    [dispatch],
  )
  const onChangeTitle = useCallback(
    (value: string) => {
      dispatch(editArticleActions.editArticleTitle(value))
    },
    [dispatch],
  )
  const onOpenModal = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [])

  const onSave = useCallback(() => {
    dispatch(editArticleById())
    navigate(getRouteArticleDetails(articleId))
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={s.modalContent}>
          <ArticleDetails isPreview />
        </div>
      </Modal>
      <Card className={cls(s.ArticleEditPage, {}, [className])} padding="20">
        <Text title={t('Edit article:')} className={s.pageTitle} />
        <ArticleEditCreateHeader
          data={editArticleData}
          onChangeArticleImage={onChangeArticleImage}
          onChangeTitle={onChangeTitle}
        />
        <VStack gap="16" className={s.blocks}>
          {editArticleData?.blocks?.map(renderEditBlocks)}
        </VStack>
        <ArticleEditCreateFooter
          isCreate={false}
          onOpenPreview={onOpenModal}
          onSave={onSave}
        />
      </Card>
    </DynamicReducerLoader>
  )
})
