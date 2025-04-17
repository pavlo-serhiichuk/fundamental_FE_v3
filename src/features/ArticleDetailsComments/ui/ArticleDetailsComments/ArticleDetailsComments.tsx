import {type FC} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {CommentList} from 'entities/Comment/ui/CommentList/CommentList'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from 'features/ArticleDetailsComments/model/slice/articleDetailsCommentsSlice'
import {
  fetchArticleCommentsById,
} from 'features/ArticleDetailsComments/model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getArticleDetailsCommentsLoading} from 'features/ArticleDetailsComments/model/selectors/articleDetailsSelectors'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import DynamicReducerLoader, {type ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {getArticleDetailsError} from 'entities/Article'
import * as s from './ArticleDetailsComments.module.scss'

interface ArticleDetailsCommentsProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (props) => {
  const {className} = props
  const dispatch = useAppDispatch()
  const {id} = useParams<{ id: string }>()
  const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading)
  const comments = useSelector(getArticleComments.selectAll)
  const articleError = useSelector(getArticleDetailsError)

  useInitialEffect(async () => {
    dispatch(fetchArticleCommentsById(id))
  })
  if (articleError) {
    return null
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={cls(s.ArticleDetailsComments, {}, [className])}>
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicReducerLoader>
  )
}
