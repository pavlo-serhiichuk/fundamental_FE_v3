import { memo, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ArticleCreatePage.module.scss'
import {
  AddArticleEditBlock,
  ArticleEditCreateFooter,
  ArticleEditCreateHeader,
  createArticleActions,
  createArticleReducer,
  editArticleActions,
  editArticleById,
  getCreateArticleData,
  renderEditBlocks,
  createNewArticle,
} from '@/entities/Article'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { Card } from '@/shared/ui/V2/Card'
import DynamicReducerLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { VStack } from '@/shared/ui/stationary/Stack'
import { ArticleDetails } from '@/features/ArticleDetails'
import { Modal } from '@/shared/ui/V2/Modal'
import {
  getRouteArticleDetails,
  getRouteArticles,
} from '@/shared/const/routers'

interface ArticleCreatePageProps {
  className?: string
}

const reducers: ReducersList = {
  createArticle: createArticleReducer,
}

export const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
  const { className } = props
  const navigate = useNavigate()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const newArticle = useSelector(getCreateArticleData)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const blocksLength = useMemo(
    () => newArticle?.blocks?.length || 1,
    [newArticle],
  )
  const onChangeArticleImage = (value: string) => {
    dispatch(createArticleActions.editArticleImage(value))
  }
  const onChangeArticleTitle = useCallback(
    (value: string) => {
      dispatch(createArticleActions.editArticleTitle(value))
    },
    [dispatch],
  )

  const onOpenModal = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [])

  const onSave = useCallback(() => {
    dispatch(createNewArticle()).then((res: any) => {
      navigate(getRouteArticleDetails(res.payload.id))
    })
  }, [dispatch, editArticleById, getRouteArticleDetails])

  const onCancel = useCallback(() => {
    navigate(getRouteArticles())
  }, [dispatch, getRouteArticleDetails])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data-testid="Modal.Preview"
      >
        <div className={s.modalContent}>
          <ArticleDetails isPreview />
        </div>
      </Modal>
      <Card className={cls(s.ArticleCreatePage, {}, [className])} padding="20">
        <ArticleEditCreateHeader
          data={newArticle}
          onChangeArticleImage={onChangeArticleImage}
          onChangeTitle={onChangeArticleTitle}
        />
        <VStack gap="16" className={s.blocks}>
          {newArticle?.blocks?.map(renderEditBlocks(true))}
          <AddArticleEditBlock
            blockIndex={blocksLength - 1}
            isLastBlock
            isCreate
          />
        </VStack>
        <ArticleEditCreateFooter
          onOpenPreview={onOpenModal}
          onSave={onSave}
          onCancel={onCancel}
          isCreate
        />
      </Card>
    </DynamicReducerLoader>
  )
})
