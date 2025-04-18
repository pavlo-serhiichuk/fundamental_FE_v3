export type {ArticleDetailsCommentsSchema} from './model/types/ArticleDetailsCommentsSchema'
export {fetchArticleCommentsById} from './model/services/fetchArticleCommentsById/fetchArticleCommentsById'
export {getArticleDetailsCommentsLoading} from './model/selectors/articleDetailsSelectors'
export {
  articleDetailsCommentsReducer,
  getArticleComments,
} from './model/slice/articleDetailsCommentsSlice'
