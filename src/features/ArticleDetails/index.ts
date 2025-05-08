export type {ArticleDetailsSchema} from './model/types/ArticleDetailsSchema'
export {articleDetailsActions, articleDetailsReducer} from './model/slice/articleDetailsSlice'
export {
  getArticleDetailsData,
  getArticleDetailsLoading,
  getArticleDetailsError,
} from './model/selectors/getArticleDetailsData'
export {ArticleDetails} from './ui/ArticleDetails/ArticleDetails'
