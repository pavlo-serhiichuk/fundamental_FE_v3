export {ArticleDetailsPageAsync as ArticleDetailsPage} from './ui/ArticleDetailsPage/ArticleDetailsPage.async'
export type {ArticleDetailsSchema} from './model/types/ArticleDetailsSchema'
export {articleDetailsActions, articleDetailsReducer} from './model/slice/articleDetailsSlice'
export {
  getArticleDetailsData,
  getArticleDetailsLoading,
  getArticleDetailsError,
} from './model/selectors/getArticleDetailsData'
export {sendArticleComment} from './model/services/sendArticleComment/sendArticleComment'
export {ArticleDetails} from './ui/ArticleDetails/ArticleDetails'
