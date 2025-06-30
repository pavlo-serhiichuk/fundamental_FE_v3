import { memo, useCallback, useMemo, useState } from 'react'
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
  AddArticleEditBlock,
  deleteArticleById,
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
  getRouteArticles,
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
  const onChangeArticleTitle = useCallback(
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
  }, [dispatch, editArticleById, getRouteArticleDetails, articleId])

  const onDelete = useCallback(() => {
    dispatch(deleteArticleById())
    navigate(getRouteArticles())
  }, [dispatch, editArticleById, getRouteArticleDetails, articleId])

  const onCancel = useCallback(() => {
    navigate(getRouteArticleDetails(articleId))
  }, [dispatch, getRouteArticleDetails, articleId])

  const onReset = useCallback(() => {
    dispatch(editArticleActions.resetArticle())
  }, [dispatch])

  const blocksLength = useMemo(
    () => editArticleData?.blocks?.length || 0,
    [editArticleData],
  )

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
          onChangeTitle={onChangeArticleTitle}
        />
        <VStack gap="16" className={s.blocks}>
          {editArticleData?.blocks?.map(renderEditBlocks(false))}
          <AddArticleEditBlock blockIndex={blocksLength - 1} isLastBlock />
        </VStack>
        <ArticleEditCreateFooter
          onOpenPreview={onOpenModal}
          onSave={onSave}
          onCancel={onCancel}
          onReset={onReset}
          onDelete={onDelete}
        />
      </Card>
    </DynamicReducerLoader>
  )
})
