export type {
  Article, ArticleBlock, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock, ArticleTopicType,
} from './model/types/article'
export {ArticleBlockType} from './model/types/article'
export type {ArticleDetailsSchema} from './model/types/ArticleDetailsSchema'
export {articleSliceActions, articleDetailsReducer} from './model/slice/articleDetailsSlice'
export {
  getArticleDetailsData,
  getArticleDetailsLoading,
  getArticleDetailsError,
} from './model/selectors/getArticleDetailsData'
